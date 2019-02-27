# DOM Event

## 事件触发机制
IE: Event Propagation
Netscape: Event Capture
W3c spefication
### 事件监听
`element.addEventListener(<event-name>, <callback>, <use-capture>);`

-`event-name`(string)
事件名称或者类型， 比如`click`, `moousedown`, `touchstart`,`transitionend` 等等或者可以是你自定义的事件。

-`callback`(function)
当事件发生的时候函数将被调用，`event`对象相关的信息将作为第一个参数传入函数中。

-`use-capture`(boolean)
声明函数将在事件冒泡阶段或者是捕获阶段被执行

```
var element = document.getElementById('element');

function callback() {
  alert('Hello');
}

element.addEventListener('click', callback);
```

## 移除事件
当事件没有存在的必要的适合把它们移除是最好的选择，这时候就需要用到下列的方法：
`element.removeEventListener(<event-name>, <callback>, <use-capture>)`
`callback` 必须存在, `element.removeEventListener('click')` 并不生效。

## 正确管理回调函数的作用域
用个简单的例子来说明一下错误的用法
```
var element = document..getElementById('element');

var user = {
  name: 'duian',
  greeting: function() {
    alert('My name is' + this.name);
  }
};

// 将user.greet当做回调函数
element.addEventListener('click', user.greeting);

// alelrt => My name is undefined
```
我们期望的是当element元素被点击的适合回调能够正确的弹出`My name is duian`，然而事实上弹出的却是`My name is undefined`，为了让`this.name`等于`duian`， `user.greeting`的作用域`this`指向的应该是`user`。

当我们把`greeting`当做`addEventListener`的回调函数时， 我们直接引用了函数但是却没有将作用域`user`一并引用。 所以其实回调函数的作用域是element。 即`this`指向的是`element`而不是`user`， 所以`this.name`变成了`undefined`

针对以上的问题， 我们有两个方法去解决作用域错误的问题。
第一个方法是我们可以通过一个匿名函数来保障`user.greeting`作用域
```
element.addEventListener('click', function() {
  user.greeting();
})
```
分分钟解决问题， 然而上述的方法不够pofei(perfect), 当我们要移除事件的时候，会因为是个匿名函数而导致我们并不能对这个函数进行任何的操作。 这样说来的话`bind()`通过生成新的函数而去保证作用域总是正确的， 下面上例子:
```
user.greeting = user.greeting.bind(user);

element.addEventListener('click', user.greeting);
```

当我们移除事件的时候，可以一并的移除这个函数
```
element.removeEventListener('click', user.greeting);
```

## 事件对象
当事件被触发的时候事件对象就出现了(is created)，它会做为第一个参数传入回调函数中，我们可以通过事件对象获得相关联的信息。
-`type`(string)
事件的名称

-`target`(node)
触发事件的那个DOM节点

`currentTarget`(node)
事件绑定时指定的那个节点

-`bubbles`(boolean)
指定是否这是一个冒泡的事件

-`preventDefault`(function)
阻止事件触发时浏览器默认行为，比如阻止点击一个`<a>`标签时跳转到新页面的动作。

-`stopPropagation`(function)
阻止事件冒泡，但是不会阻止绑定在同一个节点上面的相同事件回调函数的行为。

-`stopImmediatePropagation`(function)
阻止事件冒泡，同时会阻止绑定在同一个节点上面的相同事件回调函数的行为。

-`cancelable`(boolean)
指定当`event.preventDefault`调用时,是否事件的默认行为被阻止

-`defaultPrevented`(boolean)
该值取决于`preventDefault`方式是否曾被调用

-`eventPhase(number)
数字表示当前事件所处的阶段：none(0), capture(1), target(2), bubbling(3)

-`timestamp`(number)
事件发生的时间

## 事件的阶段
当DOM事件被触发的时候，并不是仅仅只是触发了一次而已。期间经历了有三个阶段。 首先事件从document的根节点一路到目标节点(捕获阶段), 然后触发目标节点事件(事件发生)，然后从目标节点一路回到document的根节点(冒泡阶段)

## 停止事件的传递
`event.stopPropagation()`

## 阻止浏览器默认行为
`event.preventDefault()`

## 自定义事件
浏览器不仅仅能够触发DOM事件， 也可以响应我们自定义的事件并且委托它们到任意的元素。
```
var myEvent = new CustomEvent('myevent', {
  detail: {
    name: 'duian'
  },
  bubbles: true,
  cancelable: false
});

myElement.addEventListener('myevent', function(event) {
  alert('Hello' + event.detail.name);
})

myElement.dispatchEvent(myEvent);
```

## 事件委托
```
var list = document.querySelector('ul');

list.addEventListener('click', function(event){
  var target = event.target;
  while(target.tagName !== 'LI') {
    target = target.parentNode;
    if (target === list) return;
  }

  // do stuff here
})
```

## 有用的事件
LOAD

load事件可以是任意资源完成载入时被触发，可以应用于image, style,sheet,script,video,audio,document,window
```
image.addEventListener('load', function(event){
  image.classList.add('has-loaded');
})

ONBEFOREUNLOAD

`window.onbeforeunload`可以使开发者询问用户是否确认离开页面
```
window.onbeforeunload = function() {
  if (textarea.value != textarea.defaultValue) {
    return 'DO you want to leabe the page?'
  }
}
```

RESIZE
在`window`对象上面监听resize事件对于复杂的响应布局有很大帮助

TRANSITIONEND
CSS的`transition`和`animation`能够很有力的帮助我们处理动画效果，有时候我们需要知道一个特定的动画上面时候结束
```
el.addEventListener('transitionEnd', function() {
  // do Stuff
});
```
- 如果你使用的时`@keyframe` animations, 那么是用`animationEnd` 替代 `transitionEnd`
- `transitionEnd` 事件同样会冒泡
- 事件名称仍然是需要前缀，比如`webkitTransitionEnd`,`msTransitionEnd`

AINMATIONITERATION
`animationiteration` 元素当前动画每次完成的时候都会被执行。

ERROR
对于载入错误的资源进行处理，比如对载入错误的图片
```
imageNode.addEventListener('error', function(event){
  image.style.display = 'none';
})
```
不行的是`addEventListener`的方式并不能确保当资源载入错误时`error`事件会被触发。

HASHCHANGE
URL的参数列表(#后面的参数改变时), 会触发事件
```
window.addEventListener('hashchange', function(event) {
  // do Stuff
})
```

ORIENTATIOINCHANGE
用户屏幕是否从横变纵或者由纵变横
```
window.addEventListener('orientationchange', function(event) {
  // do Stuff
})
```
