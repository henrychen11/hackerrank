let a = "abcabcbb"; //"abc"
let b = "bbbbb"; // "b"
let c = "pwwkew"; // "wke"

var lengthOfLongestSubstring = function(s) {
  //console.log("input", s);
  let max = 0;
  let start = 0;
  let hash = {};
  for (let i=0; i<s.length; i++){
    //pulls the current letter
    let current = s.charAt(i);
    let keys = Object.keys(hash);
    if (keys.includes(current) && hash[current] >= start){
      start = hash[current] + 1;
    }
    hash[current] = i;
    max = Math.max(max, i - start + 1);
  }
  //console.log(hash);
  return max;
};

console.log(lengthOfLongestSubstring(a));
console.log(lengthOfLongestSubstring(b));
console.log(lengthOfLongestSubstring(c));
