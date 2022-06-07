const al = require('./basic_al');

let id = 1;

function testcase(fn, ...args) {
  console.time(`testcase-${id}`);
  const result = fn.apply(null, args);
  if (result) {
    console.log('result is: ', result);
  }
  console.timeEnd(`testcase-${id}`);
  id++;
}
let tc = testcase;

testcase(al.fib, 10);
testcase(al.fib2, 10);
tc(al.longestCommonSubsequence, 'rbsaop', 'sacezx');
