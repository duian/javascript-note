function foo() {
  console.log(a);
}

function bar() {
  var a = 4;
  foo();
}

var a = 2;

bar();
