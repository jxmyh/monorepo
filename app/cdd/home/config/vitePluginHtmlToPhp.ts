export default function htmlToPhpPlugin() {
  let suffix = 'php'; // 默认后缀为 .php

  return {
    name: 'vite-plugin-html-to-php',
    apply: 'build',
    enforce: 'post',

    configResolved(config: any) {
      // 获取命令行参数
      const args = process.argv;
      const suffixIndex = args.indexOf('--suffix');
      if (suffixIndex !== -1 && args[suffixIndex + 1]) {
        const suffixType = args[suffixIndex + 1];
        // 仅允许合法的后缀
        if (['php', 'html'].includes(suffixType)) {
          suffix = suffixType;
        } else {
          console.warn(
            `[vite-plugin-html-to-php] 无效的后缀: ${suffixType}，使用默认值 "php"`
          );
        }
      }
    },

    generateBundle(options: any, bundle: any) {
      for (const fileName in bundle) {
        const asset = bundle[fileName];
        // 只处理 .html 文件
        if (fileName.endsWith('.html')) {
          const newFileName = fileName.replace(/\.html$/, `.${suffix}`);
          asset.fileName = newFileName;
          delete bundle[fileName]; // 删除旧的文件名
          bundle[newFileName] = asset; // 添加新的文件名
        }
      }
    }
  };
}
