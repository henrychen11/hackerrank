let str = 'middle-Outz';
let shift = 2;

function caesarCipher(s, k) {
    let result = '';
    let newKey;

    for (let i=0; i<s.length; i++){
      let current = s[i];

      if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) {
        
        newKey = current.charCodeAt(0) - 65;
        result += String.fromCharCode( ((newKey + k) % 26) + 65);
      } else if (current.charCodeAt(0) >= 97 && current.charCodeAt(0) <= 122) {

        newKey = current.charCodeAt(0) - 97;
        result += String.fromCharCode( ((newKey + k) % 26) + 97);
       } else {

         result += s[i];
       }
    }
    return result;
}

console.log(caesarCipher(str, shift));
