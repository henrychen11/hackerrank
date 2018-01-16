let str = 'middle-Outz';
let shift = 2;

function caesarCipher(s, k) {
    // Complete this function
    let result = '';
    console.log("input", s, k);


    for (let i=0; i<s.length; i++){
      let key = s[i].charCodeAt();
      let newKey = (key - "a".charCodeAt() + k) % 26 + "a".charCodeAt();

      if (key >= 'a'.charCodeAt(0) && key <= 'z'.charCodeAt(0)) {
         result += String.fromCharCode(key);  // Return un-converted character
       }
       //N = ASCII 78, if the character code is less than 78, shift forward 13 places
       else if (key >= 'A'.charCodeAt(0) && key <= 'Z'.charCodeAt(0)) {
         result += String.fromCharCode(newKey);
       } else {
         // Otherwise shift the character 13 places backward
         result += String.fromCharCode(newKey);
       }
    }
    return result;

}

console.log(caesarCipher(str, shift));
