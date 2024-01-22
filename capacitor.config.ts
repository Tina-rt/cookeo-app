import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cookeo.app',
  appName: 'cookeo-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
