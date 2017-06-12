```javascript
var foo = function foo() {
    console.log(foo === foo);  
};
foo();
```
true || false


```javascript
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa());

```
function || number || object || undefined

```javascript
Number("1") - 1 == 0;
```
true || false

```javascript
(true + false) > 2 + true;
```

true || false || TypeError || NaN

```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar());
```
number || function || undefined || string || Error

```
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go());
alert(foo.baz.bar());
```
1,2 || 1, 3 || 2, 1 || 2,3 || 3,1 || 3,2

```
new String('it"s a string') instanceof String
```
true || false 

```
[] + [] + 'foo'.split('');
```
"f,o,o" || TypeError || ["f", "o", "o"] || [][]["f", "o", "o"]

```
new Array(5).toString();
```
",,,," || [] || "[]"

```
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);
```
['foo', 'bar', 'baz'] || ['foo', 'bar', 'baz', 'bin'] || ['bin', 'foo', 'bar', 'baz'] || ['bin']

```
String('hello') === 'hello'
```

true || false || TypeError

```
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
```

ReferenceError || TypeError || undefined || 0 || 1

```
"This is a string" instanceof String;
```

true || false || TypeError

```
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;
```
ReferenceError || TypeError || undefined || NaN || 4 || 5

```
var myArr = 
['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);
```

true || false || ReferenceError

```
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1);
```
2 || undefined || ReferenceError

``` NaN === NaN```
true || false