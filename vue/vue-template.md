# 模板语法

## 插值

### 文本
``{{ variable }}``


`v-once` 一次性插值
`v-html` string to html

### 属性
`v-bind:id` 缩写 `:id`

### 使用javascript 表达式
{{ number + 1 }}
{{ ok ? 'yes' : 'no' }}


## 指令

`v-if`
`v-for`
`v-bind:`
`v-on:click`

### 过滤器

```javascript
new Vue({
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
})

```


## Class 与 Style 绑定

可以传一个对象， 动态的切换class
`<div v-bind:class="{ active: isActive }"></div>`

可以动态切换多个class
`<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>`

