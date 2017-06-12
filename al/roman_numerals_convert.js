//  I = 1
//  IV = 4
//  V = 5
//  IX = 9
//  X = 10
//  XL = 40
//  L = 50
//  XC = 90
//  C = 100
//  CD = 400
//  C = 500
//  CM = 900
//  M = 1000

function convertToRoman(num) {
  var arr = [];
  if (num > 1000) {
    var n = parseInt(num / 1000, 10);
    num = num % 1000;
    for (var i = 0; i < n; i++) {
      arr.push('M');
    }
  } else if (num > 500) {
    console.log('num');
    var n = parseInt(num / 500, 10);
    num = num % 500;
    arr.push('D');
  } else if (num > 100) {

  } else if (num > 50) {

  } else if (num > 10) {

  } else if (num > 5) {

  } else {

  }
  return arr;
}