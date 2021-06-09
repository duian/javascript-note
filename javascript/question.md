## 长列表的 key 的作用
在 virtual-dom 对 diff 算法的时候同级比较时提高比对效率。  vue 2 是进行收尾的两两比对

## 防抖和节流

debounce, 设定时间内，只触发一次
throttle，每触发一次，下一次会在 timer 之后才触发

debounce = (fn, delay) => {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() =>  fn.apply(this, args), delay);
  }
}

## Set, Map, WeakSet, WeakMap 区别
Set 集合， 不重复的元素， add， has， delete
WeakSet 成员都是对象， 无法遍历
Map，键值对集合
WeakMap 只接手对象作为健名

##
