var lettersMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = (digits) => {


  if (digits.length === 0) return [];
  console.log('di', digits);
  // let s = digits.split('');

  let result = [];
  let rest = digits.slice(1);
  let restResult = letterCombinations(rest);
  let letters = lettersMap[digits[0]];
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    if (restResult.length === 0) {
      result.push(letters[i]);
    }
    for (let j = 0; j < restResult.length; j++) {
      result.push(`${letters[i]}${restResult[j]}`);
    }
  }
  return result;
}

console.log('r', letterCombinations('232'));
