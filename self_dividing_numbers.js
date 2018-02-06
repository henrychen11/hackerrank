var selfDividingNumbers = function(left, right) {
    let r = [];
    for(let i = left;i <= right; i++){
        if (isDividing(i)){
            r.push(i);
        }
    }
    return r;
};

function isDividing(num){
    num2 = num;
    while(num2 > 0){
        remainder = num2 % 10;
        if (remainder == 0){
            return false;
        }
        if ((num % remainder) != 0){
            return false;
        }
        num2 = Math.floor(num2/10);
    }
    return true;
}

let left = 123;
let right = -123;

console.log("test", selfDividingNumbers(left, right));
