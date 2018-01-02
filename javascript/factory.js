function CarMaker() {

}

CarMaker.prototype.drive = function () {
  console.log('this hava', this.doors);
}

CarMaker.factory = function(type) {
  if (!CarMaker[type]) {
    throw Error('It\'s not exist');
  }
  if (!CarMaker[type].prototype.drive) {
    CarMaker[type].prototype = new CarMaker();
  }
  return new CarMaker[type]();
}

CarMaker.Compact = function() {
  this.doors = 4;
}

CarMaker.SUV = function() {
  this.doors = 24;
}