import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig, loadEnv } from '@rsbuild/core';

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  source: {
    define: {
      ...publicVars,
      'process.env': JSON.stringify(rawPublicVars),
    },
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'PROJECT_NAME',
        publicPath: 'auto',
      },
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'PROJECT_NAME',
      exposes: {
        './router': './src/router.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '19.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '19.0.0',
        },
      },
    }),
  ],
  server: {
    port: PROJECT_PORT_NUMBER,
  },
});
