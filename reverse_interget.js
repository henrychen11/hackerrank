var reverse = function(x) {
  if (x > 2147483647) return 0;
  // Max number for 32 bit interget is 2,147,483,647
  let isNegative = x < 0? true : false;

  if (isNegative) x = x * (-1);

  let result = 0;
  while (x !== 0){
    result = (result * 10) + (x % 10);
    x = Math.floor(x / 10);
  }

  if (isNegative){
    return result * (-1);
  } else {
    return result;
  }
};

let test1 = 123;
let test2 = -123;

console.log("test", reverse(test1));
console.log("test", reverse(test2));
