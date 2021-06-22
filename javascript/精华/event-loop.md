# Event Loop
js 的执行机制， 是通过 Event Loop 的模式，js 是单线程的语言， 所以分为了同步和异步的两种任务。 当有异步任务的时候， 会把异步任务推到 event table 之中，当异步任务执行完成，会把回调推入到 event queue。 当主线程的任务执行完毕，就回去调用 event queue 之中的注册函数，直到 queue 清空。 异步任务中也分为 micro 和 macro 两种，正确的顺序是 主线程清空， 清空 micro event queue， 执行 macro event quque


nodejs event loop microtask 顺序
- process.nextTick
- other queue, 例如 Promise

参考文章
(这一次，彻底弄懂 JavaScript 执行机制)[0]


[0]: https://juejin.cn/post/6844903512845860872
