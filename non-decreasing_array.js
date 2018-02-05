let checkPossibility = (nums) => {
  let counter = 0;
  for (let index = 1; index < nums.length; index++) {

    if (nums[index] < nums[index - 1]) {
      counter += 1;
      if (counter > 1) {
        return false;
      }

      if (index > 1
      && nums[index - 1] > nums[index + 1]
      && nums[index] < nums[index - 2]) {
        return false;
      }
    }
  }
  return true;
};

let test1 = [3,4,2,3];
let test2 = [5,2,3,4];

console.log("test", checkPossibility(test1));
console.log("test", checkPossibility(test2));
