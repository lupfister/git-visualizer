import { useEffect } from 'react';
import { listen } from '@tauri-apps/api/event';
import { confirm, message } from '@tauri-apps/plugin-dialog';
import { relaunch } from '@tauri-apps/plugin-process';
import { check } from '@tauri-apps/plugin-updater';

let updateCheckInFlight = false;

const checkForUpdate = async (manual: boolean) => {
  if (updateCheckInFlight) return;
  updateCheckInFlight = true;

  try {
    const update = await check();
    if (!update) {
      if (manual) {
        await message('Cobble is up to date.', {
          title: 'Software Update',
          kind: 'info',
        });
      }
      return;
    }

    const shouldInstall = await confirm(
      `A new version of Cobble (${update.version}) is available. Would you like to install it now?`,
      {
        title: 'Software Update',
        kind: 'info',
        okLabel: 'Update',
        cancelLabel: 'Later',
      },
    );

    if (!shouldInstall) return;
    await update.downloadAndInstall();
    await relaunch();
  } catch (error) {
    if (manual) {
      await message(`Unable to check for updates.\n\n${String(error)}`, {
        title: 'Software Update',
        kind: 'error',
      });
    } else {
      console.warn('Automatic update check failed', error);
    }
  } finally {
    updateCheckInFlight = false;
  }
};

export const useAutoUpdater = () => {
  useEffect(() => {
    const startupCheck = window.setTimeout(() => {
      void checkForUpdate(false);
    }, 1_500);

    const unlisten = listen('cobble://check-for-updates', () => {
      void checkForUpdate(true);
    });

    return () => {
      window.clearTimeout(startupCheck);
      void unlisten.then((stopListening) => stopListening());
    };
  }, []);
};
