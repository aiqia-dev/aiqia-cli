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
        publicPath: process.env.NODE_ENV === 'production' ? 'auto' : 'http://localhost:PROJECT_PORT_NUMBER/',
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
        tailwindcss: {
          singleton: true,
          requiredVersion: '^4.0.0',
        },
        react: {
          singleton: true,
          requiredVersion: '^19.1.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.1.0',
        },
      },
    }),
  ],
  server: {
    port: PROJECT_PORT_NUMBER,
  },
});
