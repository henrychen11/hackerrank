var selfDividingNumbers = function(l, r) {
    let results = [];

    for (let i=left; i <= right; i++) {
        console.log(i)
        while (i !== 0){
            let divisor = i % 10
            if (i % divisor !== 0) return false;
            results.push(i);
            i = Math.floor(i % 10)
        }
    }

    return result;
};

let left = 123;
let right = -123;

console.log("test", selfDividingNumbers(left, right));
