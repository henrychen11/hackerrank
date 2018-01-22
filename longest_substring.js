let a = "abcabcbb"; //"abc"
let b = "bbbbb"; // "b"
let c = "pwwkew"; // "wke"

var lengthOfLongestSubstring = function(s) {
    console.log("input", s);
    let result = [];
    for (let i=0; i<s.length; i++){
      let start = i;
      let end = 1;
      if (result.includes(s[start]) === false){
          result.push(s[i]);
          end += 1;
      } else {
        start = end;
        end = 0;

      }
    }
    return result;
};

console.log(lengthOfLongestSubstring(a));
console.log(lengthOfLongestSubstring(b));
console.log(lengthOfLongestSubstring(c));
