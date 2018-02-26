let a = '12345';
let b = '6699';
let c = '618819';

function rotate1(number) {

    let temp = '';

    for(let i=number.length-1; i >= 0; i--){
        
        if ( ![1,6,8,9,0].includes(parseInt(number[i]))) return false;

        if ( number[i] === '6') {
            temp += '9';
        } else if (number[i] === '9') {
            temp += '6';
        } else {
            temp += number[i];
        }
    }
    console.log("temp", temp);
    return ( parseInt(number) === parseInt(temp) ) ? true : false;        
}

console.log(a, rotate1(a));
console.log(b, rotate1(b));
console.log(c, rotate1(c));