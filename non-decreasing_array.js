var checkPossibility = function(nums) {
    let counter = 0;
    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i+1]){
            counter += 1;
            if (counter > 1){
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
