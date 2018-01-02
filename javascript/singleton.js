function Universe() {
  if (typeof Universe.instance === 'object') {
    return Universe.instance;
  }
  Universe.instance = this;
}

var Universe = (function(){
  var instance;
  function Universe() {
    if(instance) {
      return instance;
    }
    instance = this;
    return this;
  }

  return Universe;
}())