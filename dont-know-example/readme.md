## Scope & Closures
### 编译过程
1. Tokenizing/Lexing(分词/词法分析)
2. Parsing(解析/语法分析)
3. Code-Generation(代码生成)

## Object

tips: 二进制码前三位为零，则判断为object，因为null所有都是零，所以typeof null === 'object'

js定义常量
Object.defineProperty(obj, key, {
    value: '',
    writeable: false,
    configurable: false,
    emumable: true,
});


## Prototype
原型链，最底层的对象的属性重新赋值，三种情况，只有一种会变量覆盖。
```javascript
// 1. 属性只读，不会被覆盖
var a = {};
Object.defineProperty(a, 'foo', {
    value: 1,
    writeable: false,
});
var b = {};
b.__proto__ = a;
b.foo = 4;
b.foo // 1

// 2. setter 的属性，不会被覆盖
var a = {
    set foo(val) {
        this.foo = val;
    }
};

var b = {};
b.__proto__ = a;
b.foo = 4;
b.foo // 4
b // {}

// 3. 普通属性且不只读
var a = { foo: 1 };
var b = {} && b.__proto__ = a;
b.foo = 4;
b //  { foo: 4 }
```
解决方法：想要避免遇到屏蔽，使用Object.defineProperty就可以了

### Constructor
在Javascript中对于"构造函数"最准确的解释是：所有带new的函数调用。



继承意味着复制操作，JavaScript（默认）并不会复制对象属性。相反，JavaScript
个对象之间创建一个关联，这样一个对象就可以通过委托访问另一个对象的属性和函数。
委托这个属于可以更加准确的描述JavaScript中对象的关联机制

Object.create() 可以创建一个干净的关联的对象。

```javascript
function Foo() {}

Foo.prototype.sayName = function() {}

function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

// 1.相比较于下面的实现方式，Bar.prototype相当于直接调用Foo的属性，那么直接改动Bar.prototype即改动了Foo.prototype，我们需要是是一个不关联的对象.
Bar.prototype = Foo.prototype

// 2.相比较于下面的实现方式，new Foo() 过程中有一些其他的日志或者变更的操作对于其他相关的部分会有影响.
Bar.prototype = new Foo();
```

instanceof 作用，左侧普通对象，右侧是一个函数，检查左侧的对象的[[prototype]]链上是否存在函数.prototype的对象。

## TYPE
typeof funcion a() {} === 'function' // true

function 是对象的"子类型"， 函数是"可调用对象"，他有一个内部属性[[call]]，该属性使其可以被调用。

```javascript
function a(x, y, z) {}

a.length // 3，length就是声明的参数长度
```
> typeof xxx  当xxx未声明的时候， typeof xxx 会返回"undefined"， 实际上存在undefined和undeclared两种情况，但是JS没有区分，算是实现上面的缺陷。

> 如果字符串的值能够被十进制转化成数字的话，它就会被当数字来处理.

```javascript
var a = [];
a["14"] = 1;
a.length // 15
```

### Number
0.1 + 0.2 // 0.30000000000000004

0.3

```javascript
if (Number.EPSILON) {
    Number.SPSILON = Math.pow(2, -52);
}

function numberCloseEnoughEqual(a, b) {
    return Math.abs((a - b)) < Number.SPSILON;
}

numberCloseEnoughEqual(0.1 + 0.2, 0.3);
```
数字的安全范围`Math.pow(2, 53) - 1`，整数的范围`Math.pow(2, 32) -1`

`NaN` 唯一自反的值， `NaN !== NaN // true `

`Infinity`、`-Infinity`、`-0`

## Natives

### String
 substr  vs substring
 substr(from, length)
 substring(from, to)

## Coercion

### toString

### toNumber

### xxx
逻辑运算符返回其中一个操作数的值，而不是true&false
```javascript
var i = 5;
Number.prototype.valueOf = function() { return i++;
};
var x =                  new Number( 10 );
if (x == 5 && x == 6) {
    console.log( "emmmm, this happened." );
}
```

## Async && Performance


### Promise
