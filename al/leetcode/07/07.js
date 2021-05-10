var reverse = function(x) {
  var val = x;
  if (x < 0) {
      val = `${x}`.slice(1);
  } else {
      val = `${x}`;
  }

  val = val.split('').reverse().join('');
  val = x > 0 ? Number(val) : - Number(val);
  if (val > 214748364 || val < -214748364) {
      return 0;
  }
  return x;
};

reverse(1534236469);
