#1 连续赋值
```javascript
var a = {x: 1}
var b = a
a.x = a = {n: 1}
console.log(a)
console.log(b)
```

答案： a: { n: 1 }, b: { x: { n: 1 }}
思路：涉及操作符优先级的问题， 首先`a.x = a = {n: 1}` 涉及两个操作符， . 和 =， 其中 . 的优先级为 19， 仅次于 () 的 20， 而 = 的优先级是 3。
- 获取 对象 A 的 x 属性 待赋值
- a = { n: 1 }
- x = { n: 1 }
- b 指向对象 A， { x: { n: 1 } }
还有一种解释: https://segmentfault.com/a/1190000004224719

#2 构造函数和原型链
```javascript
Function.prototype.a = () => alert(1)
Object.prototype.b = () => alert(2)
function A() {}
const a = new A()
a.a()
a.b()
```
答案：a.a is not a function
解析：a 是 A 的实例， a.__proto__ 指向的是 { constructo: function A() {}}， 是一个对象，而不是 Function.prototype.a


#3 let 和 const
```javascript
 let a = 0
console.log(a)
console.log(b)
let b = 0
console.log(c)
function c() {}
```

答案: 报错 referenceError b is not defined
解析: let 声明的变量，不会变量提升，在赋值之前引用会报错

#4 函数作用域和闭包
```javascript
var x = 10
function a(y) {
    var x = 20
    return b(y)
}
function b(y) {
    return x + y
}
a(20)
```
答案： 30
解析: JS 是静态作用域，即在代码环节就确定了函数的上下文, b(y) 的调用， 看的是 函数 b 所在的位置时，调用的 x 的值。 想要得到 40， 需要把函数 b 放在 函数 a 的内部

#5 宏任务和微任务
```javascript
console.log(1)
setTimeout(() => {
    console.log(2)
})
process.nextTick(() => {
    console.log(3)
})
setImmediate(() => {
    console.log(4)
})
new Promise(resolve => {
    console.log(5)
    resolve()
    console.log(6)
})
.then(() => {
    console.log(7)
})
Promise.resolve()
.then(() => {
    console.log(8)
    process.nextTick(() => {
        console.log(9)
    })
})
```

答案： 1 5 6 3 7 8 9 2 4
解析： 先分析主进程， 1， new Promise(resolve => { 5, 6 }), 然后执行微任务， nextTick  3, then 7, then 8 then 9, 再执行宏任务 2, 4

#6 数组和 parseInt
```javascript
[1, 2, 3, 4, 5].map(parseInt)
```

答案: [1, NaN, NaN, NaN, NaN];
解析: Array.prototype.map(currentValue[index, array])， parseInt(number, radix(2~36之间的整数，当 radix 不存在或者为零的时候， 默认为10进制))

#7 typeof
```javascript
 typeof typeof typeof []
```

答案: 'string'
解析: typeof [] === 'object', typeof 'object' === 'string', typeof 'string' === 'string'

#8 css 优先级
```html
<style>
.classA {color: blue;}
.classB {color: red}
</style>
<p class="classB classA">123</p>
```
答案：红色
解析: 权重相同的情况下， 在声明文件或者顺序中靠后的规则会覆盖靠前的规则

#9 a11y 可访问性
https://juejin.cn/post/6844904017127047182

#10 编程
```javascript
/*
  *one.add(two), two.add(one)， 等同于这个
  * add.call(null, one, two)
*/

function add(num) {
  return (num1) => {
    return num + num1;
  }
}
function one(...args) {
  if (args.length > 0) {
    let operator = args[0];
    return operator.call(null, 1);
  } else {
    return 1;
  }

}
function two(...args) {
  if (args.length > 0) {
    let operator = args[0];
    return operator.call(null, 2);
  } else {
    return 2;
  }
}
console.log(one(add(two()))) // 3
console.log(two(add(one()))) // 3
```
 解析： 首先 one 和 two 没有参数的时候直接返回对应的数值， add 需要返回一个新的函数， 存住第一个数字，并且接收一个新的参数，完成相加的功能， one 和 two 如果遇到有参数的时候， 则调用参数方法，并且把自身的值传进去。

