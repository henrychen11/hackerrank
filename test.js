var twoSum = function(nums, target) {
    let hashMap = {};
    
    for (let i = 0; i < nums.length; i++){
      if (hashMap[nums[i]] !== undefined ){
          console.log('found', hashMap)
        return [hashMap[nums[i]], i];
      } else {
        console.log('here', hashMap)
        hashMap[target - nums[i]] = i
      }
    }
      console.log(hashMap);
};

// console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));