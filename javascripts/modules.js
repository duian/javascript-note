myModules.define('bar', ['foo'], function(bar) {

})

var myModules = (function() {
  var modules = {};

  function define(name, deps, impl) {
    for(var i = 0, len = deps.length; i < len; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name]
  }
  return {
    define: define,
    get: get,
  };
}());