import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

import viteUsePublicHtml from './config/viteUsePublicHtml'
import path from 'path';

export default defineConfig({
  plugins: [
    viteUsePublicHtml,
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            'useCounter',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          'lodash': [
            ['_']
          ],
          // 'dayjs': [
          //   ['dayjs']
          // ]
        },
        // example type import
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
      dts: './types/auto-imports.d.ts',
      resolvers: [VantResolver()],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.js',
        globalsPropValue: true,
      },
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'assets'),
      '@utils': path.join(__dirname, 'utils'),
      '@common': path.join(__dirname, 'common'),
    }
  },
  publicDir: 'src/assets/',
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html'
      }
    }
  }
}) satisfies UserConfig
