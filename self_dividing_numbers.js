var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i = left;i <= right; i++){
        if (isDividing(i)){
            result.push(i);
        }
    }
    return result;
};

function isDividing(num){
    let num2 = num;
    while(num2 > 0){
        let remainder = num2 % 10;
        if (remainder === 0){
            return false;
        }
        if ((num % remainder) !== 0){
            return false;
        }
        num2 = Math.floor(num2/10);
    }
    return true;
}

let l = 1;
let r = 22;

console.log("test", selfDividingNumbers(l, r));
