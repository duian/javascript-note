# Webpack
## 原理
### Compiler
初始化传入的参数和配置(entry, output, module, plugin等)
Compilation
## 优化简介
最简单快捷的优化： 升级 nodejs 和 webpack 的版本

分析工具： webpack-bundle-analyzer, speed-measure-webpack-plugin

## 速度优化
总结就是： 缓存 + 多线程
- thread-loader 多线程构建
- terser-webpack-plugin  多线程压缩
- cache-loader 缓存
- hardcore
- babel cache

- mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。

## 缩小打包作用域
exclude/include (确定 loader 规则范围)
resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
resolve.extensions 尽可能减少后缀尝试的可能性
noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
IgnorePlugin (完全排除模块)
合理使用alias
