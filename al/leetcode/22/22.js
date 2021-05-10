var generateParenthesis = (n) => {
  let res = [];

  let dfs = (cur, left, right) => {
    console.log('cur', cur, left, right);
    if (cur.length === 2 * n) {
      res.push(cur);
      return null;
    }

    if (left > 0) dfs(cur + '(', left - 1, right);
    if (right > left) dfs(cur + ')', left, right - 1);
  }

  dfs('', n, n);

  return res;
}

generateParenthesis(3);
