var twoSum = function(nums, target) {

    let hashMap = {},
        results = []
    
    for (let i = 0; i < nums.length; i++){
      if (hashMap[nums[i]]){
        return [hashMap[nums[i]], nums[i]];
      }else{
        hashMap[target - nums[i]] = i
      }
    }
    return results;
      
      console.log(hashMap);
  };