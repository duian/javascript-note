function bind(context, fn) {
  return (...args) => {
    fn.apply(context, args);
  }
}
