var maxW;
var weight = [2, 2, 4, 6, 3];
var n = 5;
var w = 9;
var mem = [[], [], [], [], [], []];

function f(i, cw) {
  if (cw == w || i == n) {
    if (cw > maxW) maxW = cw;
    return null;
  }

  console.log('t', mem[i], i, cw, mem[i][cw]);
  if (mem[i][cw]) return null;
  mem[i][cw] = true;

  f(i + 1, cw);
  if (cw + weight[i] <= w) {
    f(i + 1, cw + weight[i]);
  }
}

f(0, 0);
console.log('max', maxW);
