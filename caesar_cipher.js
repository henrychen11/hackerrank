let str = 'middle-Outz';
let shift = 2;

function caesarCipher(s, k) {
    // Complete this function
    let result = '';
    console.log("input", s, k);
    console.log("a", s.charCodeAt("a") );
    for (let i=0; i<s.length; i++){
        let code = s.charCodeAt(i);
        let new_key = code + k;
        if (code >= 65){
            console.log("current", s.charCodeAt(i));
            console.log("new", String.fromCharCode(new_key % 109));
            result += String.fromCharCode(new_key);
        } else {
            result += s[i];
        }
    }
    return result;

}

console.log(caesarCipher(str, shift));
