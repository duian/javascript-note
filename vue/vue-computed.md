# 计算属性


基础栗子
```javascript
const vm = new Vue({
  el: '#example',
  data: {
    message: 'hello',
  },

  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('');
    },
  },
})

```

计算属性的效果同直接调用方法
```javascript
<p>{{ reverseMessage() }}</p>
```

## 计算缓存 vs Methods

计算属性只有当有依赖的属性变化的时候才会随之变化，能够缓存住值， 而Methods的方法每次都需要重新执行。


## 计算属性 vs Watched property
$watch, 优先使用计算属性。 然而watch允许执行一个异步操作，限制执行该操作的频率，同时可以设置中间状态。


## 设置setter

```javascript
computed: {
  fullName: {
    get: function() {
      return this.firstName + this.lastName;
    },

    set: function(newValue) {
      const names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    },
  }
}
```

