## 仓库介绍
使用`monorepo`文案，由`pnpm wrokspack`方案使用的一个仓库，此仓库可以实现公用的包，在大仓库下，其它的私有包，可以安装至私有项目中。

### 公用包介绍 
- vite
- vue
- vant
- vueuse
- sass

### 仓库功能

- ~~自动导入~~ 222
- 多入口
- 打包
- `cli`开发
- 提交时自动修复代码格式
- 提交时检测代码


### 使用说明

1 进入主目录中
```bash
pnpm install
```
2 进入app目录中
``` bash
cdd new <name>
cdd page <pageName> //多页面创建模块
```

3 开发完成后
```bash
cdd publish <env>
```
