## 什么是 MVVM
model-view-view-model 通过 数据的更新驱动视图的更新，视图的更新也能够驱动数据的更新。

Observe(Object.defineProperty) -> Sub/Sup ->Watcher -> compile -> virtual-dom - dom

## SPA 的优缺点
优点：利用 hashchange 或者是 pushState 进行页面的变换。  页面内容一次性加载，用户体验更好，数据共享，减少服务端压力， 前后端分离，前端专注交互逻辑，服务端专注数据处理

缺点：初次加载耗时更多， 需要自己维护浏览器前进后退，SEO

v-if false 的时候，直接不渲染节点

## 数据单向流
父组件 ->（props) 自足见

## computed 和 watch 的区别

computed 用作计算属性， 依赖的值没有变化的时候，读取的是缓存
watch 是监听变化的时候，执行对应的 回调

## 直接给数组赋值，能监听到变化吗
不能， 因为 vue 的数据监听通过的 Object.defineProperty, 对于数组， vue 是通过切片编程， 在数组自带的7个方法之上覆盖了一层，当执行 Array.prototype.slice 等方法时去执行数据的更新。

## Vue 的生命周期
即组件的生命周期， 分为渲染、更新，销毁， keep-alive 还有 activity 和 deactivity

## Vue 父子组件函数执行顺序
 parent(create) -> parent(beforeMount) -> child(created) -> child(mounted) -> parent(mounted)

## 在哪个生命周期调用异步请求
created， beforeMount，mounted ， 一般在 created 进行数据调用，更快获取数据， ssr 不支持 beforeMount和 mounted

## 什么阶段能访问 DOM
mounted

## 父组件能监听子组件的生命周期吗？
1.通过`<Child @mounted="doSomethin">`

## keep-alive 的了解
结合路由进行缓存组件， 组件本身包含 exclude 和 include，字符串或者正则匹配，提供两个勾子函数

## data 为什么是一个函数
组件复用， 如果是一个对象的话， 那么改一个组件，会影响其他组件，必须是没有副作用的

## v-model 的原理
 父组件 实现了一个 @input， 子组件 $emit

## 组件通信
分为父子，兄弟，祖孙

父子 props
兄弟， 共同的父节点
祖孙 @inject

EventBus 或者 vuexF
