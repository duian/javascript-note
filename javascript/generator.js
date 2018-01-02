function Sale(price) {
  this.price = price || 1000;
}

Sale.prototype.getPrice = function() {
  return this.price;
}

Sale.prototype.decorate = function(decorate) {
  var F = function(){},
    overrides = this.constructor.decorators[decorator],
    i,
    newobj;

  F.prototype = this;
  newobj = new F();
  newobj.uber = F.prototype;
  for (i in overrides) {
    if (overrides.hasOwnproperty(i)) {
      newobj[i] = overrides[i];
    }
  }
  return newobj;
}

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice() {
    var price = this.uber.getPrice();
    price += price * 5 / 100;
    return price;
  }
}