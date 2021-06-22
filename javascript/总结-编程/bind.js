function call(context = window, fn) {
  context[fn](...args)
  delete context[fn];
}

function bind(context, fn, ...args) {
  return (...args2) => {
    fn.apply(context, args.concat(args2));
  }
}
