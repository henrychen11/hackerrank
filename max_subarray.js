let a = [-2,1,-3,4,-1,2,1,-5,4]; // contiguous subarray [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i=0; i<nums.length; i++){
    if (sum < 0){
      sum = nums[i];
    } else {
      sum += nums[i];
    }

    if (sum > max){
      max = sum;
    }
  }
  return max;
};

console.log(maxSubArray(a));
