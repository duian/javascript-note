# Javascript 数据类型和数据结构

## 数据类型
- string
- number
- boolean
- undefined
- symbol
- bigInt
- null
- object

## Number
标准： IEEE 745  双精度 64 位二进制格式
精度： (-(2^53 - 1))~(2^53 - 1)
带符号值： -Infinity +Infinity  NaN
常量：Number.MAX_VALUE Number.MIN_VALUE
ES6 方法: Number.isSafeIntger() Number.MAX_SAFE_INTEGER Number.MIN_SAFE_INTEGER

## BigInt
BigInt  只需要在正常数字后面加一个 n 不能与数字相互操作

## String
16位 无符号整数值的元素， 字符串不可修改

## Object
对象指内存中的可以被标识符引用的一块区域

### 属性
对象就是一组属性的集合

### 数据属性
数据属性是键值对，每个数据属性拥有下列特性
[[Value]] \ 任何 js 类型 \ 包含这个属性的数据值  \  undefined
[[Writable]] \ Boolean \ 如果为 false， 则该属性的[[value]] 不可改变 \ false
[[Enumerable]] \ Boolean \ 如果为true，则该属性可以用 for...in 循环来枚举 \ false
[[Configurable]] \ Boolean \ 如果为 false， 则该属性不能删除，并且除了[[value]] 和 [[writable]] 以外的特性都不能被改变

###  访问器属性
访问器属性有一个或者两个访问器函数(get 和 set) 来存取数值， 并且有一下特性：

[[Get]] \ 函数对象或者 undefined \ 该函数使用一个空的参数列表，能够在有权访问的情况下读取属性值
[[Set]] \ 函数对象或者 undefiend \  该参数有一个参数，用来写入值
[[Enumerable]] \ Boolean \ 如果为true，则该属性可以用 for...in 循环来枚举 \ false
[[Configurable]] 如果该值为 false，则该属性不能被删除，并且不能被转变成一个数据属性。

## Map
- Map 的健可以是任意值，包括函数，对象和其他基本类型
- Map 中的 key 是有序的。因此当迭代的时候
- Map 对象以插入的顺序返回键值
- Map 有 size 属性返回键值个数

## WeakMap
- 健是弱引用，其健必须是对象，值可以是任意值

## Set
- Set 是值的集合， 按插入的顺序迭代, Set 中的元素只会出现一次，Set 中的元素是唯一的

## WeakSet
- WeakSet 只能是对象的集合
- 集合中的对象为弱引用， 如果没有其他的对 WeakSet 中对象的引用，那么这些对象会被当成垃圾回收掉

## 结构化数据 JSON
