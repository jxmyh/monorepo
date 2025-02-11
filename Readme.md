## 仓库介绍

使用`monorepo`文案，由`pnpm wrokspack`方案使用的一个仓库，此仓库可以实现公用的包，在大仓库下，其它的私有包，可以安装至私有项目中。

### 公用包介绍

- vite
- vue
- vant
- vueuse
- sass

### 目录说明

├── Readme.md
├── app 项目目录
├── package.json
├── packages 自定义函数或包目录
├── pnpm-lock.yaml
└── pnpm-workspace.yaml

### 仓库功能

- ~~自动导入~~
- ~~多入口~~
- ~~打包~~
  - ~~打包时将.html 转为.php~~
  - ~~正式上线打包删除 console 和 debugger 内容~~
- 压缩图片
- 中文字体支持
- 英文字体支持
- 动画支持
- `cli`开发
- 提交时自动修复代码格式
- 提交时检测代码

### 打包说明

1.测试和 beta 环境打包

```bash
#打包成测试环境 生成为php后缀文件
pnpm build
#打包成测试环境并且生成html后缀文件
pnpm build:html

```

2.正式环境打包

```bash
#打包成正式环境 生成为php后缀文件
pnpm prod
#打包成正式环境 生成为html后缀文件
pnpm prod:html
```

### 使用说明

1 进入主目录中

```bash
pnpm install
```

2 进入 app 目录中

```bash
cdd new <name>
cdd page <pageName> //多页面创建模块
```

3 开发完成后

```bash
cdd publish <env>
```
