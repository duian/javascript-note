# Vue 实例

```javascript
const vm = new Vue({
  
});
```
可传参数模板/数据/声明周期/方法/挂载元素


```javascript

const MyComponent = Vue.extend({
  
});

const myComponentInstance = new MyComponent();
```

## 属性与方法

每个Vue实例都会**代理**其`data`对象的所有属性

Vue实例暴露了一些其他有用的属性和方法。这些属性和方法都有前缀`$`，以便与代理的data属性区分。


## 实例生命周期

`mounted`, `updated`, `destroyed`


