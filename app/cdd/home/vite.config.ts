import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import legacyPlugin from '@vitejs/plugin-legacy';

import viteUsePublicHtml from './config/viteUsePublicHtml';
import path from 'path';

// mpa
import { createMpaPlugin, createPages } from 'vite-plugin-virtual-mpa';

export default defineConfig(({ command, mode }) => {
  const sourcemap = mode == 'production' ? true : false;
  console.log('mode=>', sourcemap);
  const baseConfig = {
    assetsInclude: ['**/*.php'],
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
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
              ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            axios: [
              // default imports
              ['default', 'axios'] // import { default as axios } from 'axios',
            ],
            lodash: [['_']]
            // 'dayjs': [
            //   ['dayjs']
            // ]
          },
          // example type import
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true
          }
        ],
        dts: './types/auto-imports.d.ts',
        resolvers: [VantResolver()],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.js',
          globalsPropValue: true
        }
      }),
      Components({
        dts: './types/components.d.ts',
        dirs: ['components', 'src/**/components', 'src/components'],
        deep: true,
        directoryAsNamespace: false,
        extensions: ['vue', 'tsx', 'jsx'],
        resolvers: [VantResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ]
      }),
      createMpaPlugin({
        template: 'public/index.html',
        scanOptions: {
          scanDirs: 'src/pages',
          entryFile: 'main.ts',
          filename: (name) => `${name}.${command == 'build' ? 'html' : 'html'}`
        }
      }),
      legacyPlugin({
        renderLegacyChunks: true, // 开启传统浏览器polyfill
        polyfills: true // 针对传统浏览器的polyfill，采用默认的规则
      })
    ],
    resolve: {
      alias: {
        '@assets': path.join(__dirname, 'assets'),
        '@utils': path.join(__dirname, 'utils'),
        '@common': path.join(__dirname, 'common')
      }
<<<<<<< Updated upstream
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [VantResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ]
    }),
    legacyPlugin({
      renderLegacyChunks: true, // 开启传统浏览器polyfill
      polyfills: true // 针对传统浏览器的polyfill，采用默认的规则
    })
  ],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'assets'),
      '@utils': path.join(__dirname, 'utils'),
      '@common': path.join(__dirname, 'common')
    }
  },
  publicDir: 'src/assets/',
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html'
=======
    },
    publicDir: 'assets/'
  } satisfies UserConfig;
  if (command == 'serve') {
    return baseConfig;
  } else {
    return {
      ...baseConfig,
      build: {
        // 生成manifest文件，用于缓存控制
        manifest: true,
        outDir: 'dist',
        target: 'es2015',
        minify: `${mode == 'production' ? false : true}`,
        emptyOutDir: true,
        sourcemap,
        brotliSize: true,
        // 禁止将assets目录中的资源放置至打包目录
        copyPublicDir: false,
        rollupOptions: {
          output: {
            // 禁用 source map
            sourcemap,
            // 将js由assets目录转为js目录
            entryFileNames: 'js/[name]-[hash].js',
            // 将公用的js转至js/public目录下
            chunkFileNames: 'js/public/[name].[hash].js',
            // 针对静态资源 css
            assetFileNames: (assetInfo) => {
              if (/\.(png|jpg|jpeg|gif|svg)$/.test(assetInfo.name)) {
                return 'img/[name].[hash].[ext]';
              } else if (/\.css$/.test(assetInfo.name)) {
                return 'css/[name].[hash].css';
              }
              return assetInfo.name;
            }
          }
        }
>>>>>>> Stashed changes
      }
    };
  }
});
