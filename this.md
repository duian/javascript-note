1.函数表达式和函数声明的区别 (送命题)
hoist(变量名提升)

2.闭包的作用

this 的作用  this是在调用时被绑定的， 完全取决于函数的调用位置
默认绑定  指向window， 如果开了'use strict' 会是undefined
function foo() { 
    console.log(this.name) 
}
隐式绑定 对当做应用属性调用, 最后一层在调用位置中起作用
function foo() {
    console.log(this.name);
}

var obj = {
    name: 'zhangsan',
    foo: foo,
};
