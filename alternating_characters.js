let a = 'AAAA'; //3
let b = 'BBBBB'; //4
let c = 'ABABABAB'; //0
let d = 'BABABA'; //0
let e = 'AAABBB'; //4

function alternatingCharacters(s){
    // Complete this function
    let count = 0;
    let lastChar = s.charAt(0);
    for (let i=1; i<s.length; i++){
      if (lastChar === s.charAt(i)){
        count += 1;
      } else {
        lastChar = s.charAt(i);
      }
    }
    return count;
}

console.log(alternatingCharacters(a));
console.log(alternatingCharacters(b));
console.log(alternatingCharacters(c));
console.log(alternatingCharacters(d));
console.log(alternatingCharacters(e));
