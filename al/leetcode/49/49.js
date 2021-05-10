var groupAnagrams = function(strs) {
  const map = new Object();
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      console.log('c', count, map[count]);
      map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};

var r = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log('r', r);

// var groupAnagrams = function(strs) {
//   const map = new Map();
//   for (let str of strs) {
//       let array = Array.from(str);
//       array.sort();
//       let key = array.toString();
//       let list = map.get(key) ? map.get(key) : new Array();
//       list.push(str);
//       map.set(key, list);
//   }
//   return Array.from(map.values());
// };
