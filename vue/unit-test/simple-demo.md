// 静态模板的单元测试关注重点:
// 1. 方法（含生命周期）确认是函数
// 2. 默认属性(prop和data)值
// 3. 生命周期对应的逻辑走向
```javascript
// MyComponent
<template>
  <span>{{ message }}</span>
</template>
<script>
export default {
  data() {
    return {
      message: 'hello',
    }
  },

  created() {
    this.message = 'bye!';
  }
}
</script>
```

```javascript
import Vue from 'vue';
import MyComponent from 'MyComponent.vue';

describe('MyComponent', () => {
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function');
  });

  it('sets the correct default data', () => {
    expext(typeof MyComponent.data).toBe('function');
    const defaultData = MyComponent.data();
    expect(defaultData.message).toBe('hello!');
  });

  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount();
    expect(vm.message).toBe('bye!');
  });

  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount();
    expect(vm.$el.textContent).toBe('bye!');
  })
})
```