import {  Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

// 自定义插件来重定向 HTML 请求
const usePublicHtml: Plugin = {
  name: 'use-public-html',
  configureServer(server) {
    // 在开发服务器中间件中拦截请求
    server.middlewares.use((req, res, next) => {
      const url = req.url || '';
      if (url === '/' || url === '/index.html') {
        const htmlPath = path.resolve(__dirname, '../public/index.html');
        fs.readFile(htmlPath, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end('Error reading index.html');
          } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
          }
        });
      } else {
        next();
      }
    });
  }
};



export default usePublicHtml;