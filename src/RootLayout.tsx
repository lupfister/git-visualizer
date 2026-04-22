import type { ReactNode } from 'react';
import { Agentation } from 'agentation';
import { DialRoot, useDialKit } from 'dialkit';
import 'dialkit/styles.css';

type RootLayoutProps = {
  children: ReactNode;
};

/** Registers at least one DialKit panel; DialRoot renders nothing until a panel exists. */
const DialKitBootstrap = () => {
  useDialKit('Git Visualizer', {
    preview: [1, 0, 1],
  });
  return null;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    {children}
    <DialKitBootstrap />
    {/* productionEnabled: show in Vite production / Tauri release (defaults off when NODE_ENV is production) */}
    <DialRoot productionEnabled defaultOpen={false} theme="system" />
    <Agentation />
  </>
);

export default RootLayout;
