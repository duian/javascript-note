// new 创建一个对象， 返回一个对象
function Person() {
  this.name = 1;
  this.age = 2;
}

function _new(cls, ...args) {
  if (cls === null && !cls instanceof Function) return {};

  let o = {}
  cls.apply(o, args);
  o.__proto__ = cls.prototype;
  // o.constructor = cls;
  return o;
}
