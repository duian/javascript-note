const map = {};
function f(n) {
   if (n === 0 || n === 1) {
       return 1;
   }
   if (map[n]) {
       return map[n];
   }
   const result = f(n - 1) + f(n - 2);
   map[n] = result;
   return result;
}

console.log('10:', f(10))
console.log('50:', f(50));
console.log('100:', f(100));
