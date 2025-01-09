import antfu from '@antfu/eslint-config'
export default antfu(
  {
    type: 'app', // 项目类型为 'app'，适用于应用程序项目 可选lib

    stylistic: {
      indent: 2, // 缩进风格
      quotes: 'single', // 单引号
    },
    include: [
      "scripts/**/*.ts",
      "./**/*.ts",
      "./**/*.d.ts",
      "./**/*.tsx",
      "./**/*.vue",
      "./**/*.scss",
      "./**/*.less",
      "scripts/index.mts",
      "scripts/templateTs/router/routes.ts",
      "scripts/templateTs/router/index.ts",
      "scripts/templateTs/main.ts",
      "./vite-env.d.ts",
      "types/*.d.ts",
      "./*.ts",
      "types/auto-imports.d.ts", // 引入auto-import.d.ts文件
    ],

    typescript: true,
    vue: {
      overrides: {
        // enforce order of component top-level elements 自定义 Vue 文件中标签的顺序，模板 -> 脚本 -> 样式
        'vue/block-order': ['error', {
          order: ['template', 'script', 'style'],
        }],
      },
    },
    jsonc: false,
    yaml: false,
    ignores: [
      '**/fixtures', // 忽略特定路径下的文件（如 fixtures 目录）
    ],
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier 
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',
      jsonc: true
    }
  },
 
  // 第二部分，应用于所有 TypeScript 文件的规则配置
  {
    files: ['**/*.ts','**/*.vue','**/*.js'], // 仅匹配 TypeScript 文件
    rules: {},
  },

  // 第三部分，额外的规则配置
  {
    rules: {
      'no-console': false,
    },
    
  },
)
