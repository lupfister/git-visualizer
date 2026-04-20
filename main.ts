import './lib/swallow-epipe-errors';
import { shutdown as shutdownTelemetry } from './lib/telemetry';
import './icon/startup';
import { app, BrowserWindow, ipcMain, session } from 'electron';
import { APP_URL, exchangeCodeForSession } from './auth/auth';
import path from 'path';
import fs from 'fs';
import todesktop from '@todesktop/runtime';
import { initWindowManager, redirect, type WindowManager } from './window/window-manager';
import { initAuthFlow, type AuthFlow } from './auth/auth-flow';
import { createApplicationMenu } from './menu/application-menu';
import { initMcpServer, type McpModule } from './mcp/index';
import { AppIcon } from '@paper/assets/src/types';
import { setAppIcon, getAppIcon } from './icon';
import pkg from '../package.json';
import { showUpdateMessageBox } from './lib/update-message';
import { initDeepLinks } from './deep-links/init';
import { initAssetsProtocol } from './deep-links/assets';

todesktop.init({
  updateReadyAction: {
    showInstallAndRestartPrompt: ({ appIsInForeground, updateInfo }) => {
      if (!appIsInForeground || !updateInfo) {
        return;
      }

      showUpdateMessageBox(updateInfo);
    },
    showNotification: 'whenInBackground',
  },
});

// Append PaperDesktop/{version} to the user agent so the client can detect
// the desktop version and enforce a minimum version gate.
app.userAgentFallback = `${app.userAgentFallback} PaperDesktop/${pkg.version}`;

// Single instance lock - ensures only one instance of the app runs at a time
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  // Another instance is already running, quit immediately
  app.quit();
} else {
  let windowManager: WindowManager;
  let windowManagerReady = Promise.withResolvers();
  let authFlow: AuthFlow;
  let mcpServer: McpModule;

  // This enables html-in-canvas which we're using for video export on desktop.
  // See: https://github.com/WICG/html-in-canvas
  app.commandLine.appendSwitch('enable-blink-features', 'CanvasDrawElement');

  initAssetsProtocol();

  initDeepLinks({
    onDeepLink: async (deepLink) => {
      await windowManagerReady.promise;

      const win = windowManager.getTargetWindow();
      if (win.isDestroyed()) {
        return;
      }

      if (win.isMinimized()) {
        win.restore();
      }

      win.focus();

      if (deepLink.type === 'auth-callback') {
        await redirect(win, { route: '/static/desktop/preloader.html' });
        const result = await exchangeCodeForSession(deepLink.code);
        if (result.success) {
          await redirect(win, { route: result.redirectToRoute ?? '/' });
        } else {
          await redirect(win, { url: `${APP_URL}/error?message=${encodeURIComponent(result.errorMessage)}` });
        }
      } else if (deepLink.type === 'link') {
        await redirect(win, { route: deepLink.route });
      }
    },
  });

  // Handle when a second instance tries to launch
  app.on('second-instance', () => {
    // Focus the most recent window, or create one if none exist
    const windows = BrowserWindow.getAllWindows();
    if (windows.length > 0) {
      const win = windows[0]!;
      if (win.isMinimized()) win.restore();
      win.focus();
    } else {
      windowManager.createWindow();
    }
  });

  // App initialization
  app.whenReady().then(() => {
    // Preconnect to the app URL to speed up initial load time — especially on cold start.
    session.defaultSession.preconnect({ url: APP_URL });

    ipcMain.on('set-app-icon', (_event, icon: AppIcon) => setAppIcon(icon));
    ipcMain.handle('get-app-icon', () => getAppIcon());

    // Debug helper exposed via window.paper.desktop.debug.gpu() in DevTools
    ipcMain.handle('desktop-debug-gpu', async () => ({
      versions: {
        electron: process.versions.electron,
        chrome: process.versions.chrome,
        node: process.versions.node,
        platform: process.platform,
        arch: process.arch,
      },
      featureStatus: app.getGPUFeatureStatus(),
      gpuInfo: await app.getGPUInfo('complete'),
    }));

    // Initialize auth flow first with a deferred window getter
    // (window manager isn't initialized yet, but will be before any auth flow runs)
    authFlow = initAuthFlow(() => windowManager.getTargetWindow());

    // Initialize window manager with auth handlers
    windowManager = initWindowManager({
      onAuthRoute: () => authFlow.startAuthFlow(),
      showWaitingForAuthPage: () => authFlow.showWaitingForAuthPage(),
    });

    // Create the first window so it's ready for auth flow or MCP communication immediately.
    windowManager.createWindow();
    windowManagerReady.resolve();

    // Set up the application menu
    createApplicationMenu(() => windowManager.createWindow());

    // Initialize MCP server for agent communication
    mcpServer = initMcpServer(() => windowManager.getTargetWindow());

    // Handle downloads: auto-save to Downloads folder so multiple exports
    // don't get blocked by overlapping "Save As" dialogs.
    session.defaultSession.on('will-download', (_event, item) => {
      const downloadsPath = app.getPath('downloads');
      const fileName = item.getFilename();
      const ext = path.extname(fileName);
      const base = path.basename(fileName, ext);

      // Generate a unique filename if the file already exists
      let savePath = path.join(downloadsPath, fileName);
      let counter = 1;
      while (fs.existsSync(savePath)) {
        savePath = path.join(downloadsPath, `${base} (${counter})${ext}`);
        counter++;
      }

      item.setSavePath(savePath);

      if (process.platform === 'darwin') {
        item.once('done', (_event, state) => {
          if (state === 'completed') {
            app.dock?.downloadFinished(savePath);
          }
        });
      }
    });

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
        windowManager.createWindow();
      }
    });
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // Clean up when the app quits
  app.on('will-quit', async () => {
    await session.defaultSession.cookies.flushStore();
    mcpServer?.cleanup();
    await shutdownTelemetry();
  });
}
