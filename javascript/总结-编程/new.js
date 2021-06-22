function Person() {
  this.name = 1;
  this.age = 2;
}

function newx(target, ...args) {
  let obj = {};
  obj.__proto__ = target.prototype
  var t = target.apply(obj, args);
  return obj;
}

// target instanceof origin
function insanceof2(target, origin) {
  if (target !== 'object' || target === null) return false;

  const proto = Object.getPrototypeOf(target);

  while (proto) {
    if (proto === origin.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false
}
