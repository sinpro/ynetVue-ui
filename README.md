# ynet-ui

> 基于Vue2.x的前端组件库

# 项目目录
``` bash
.
├── libs                          # 压缩后组件文件目录
├── dist						  # 打包出来的静态html文件
├── view                          # 项目结构目录
│   ├── App.vue                   # 单页应用父组件          
│   └── main.js                   # 单页应用启动入口文件
├── src                           # 开发目录
│   ├── assets                    # 静态文件：scss/image
│   ├── components                # 存放共用组件库
│   ├── index.js                  # 全局注册组件插件
│   └── style.js                  # 导入scss
├── build                         # 开发目录
│   ├── webpack.dev.js            #项目启动配置文件：npm run dev
│   ├── webpack.config.js         #项目组件ui打包配置文件：npm run build
│   └── webpack.prod.js           #项目静态html打包配置文件：npm run build:prod
├── index.html
├── package.json                  # 依赖管理
└── README.md                     #README
```

# Usage

## Install dependencies

```bash
  npm install
```
or

```bash
  yarn
```

## Serve with hot reload at localhost:8080

```bash
  npm run dev
```

> 发布新版本时，执行打包压缩

## Build for production with minification

```bash
  npm run build
```

