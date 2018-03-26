/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {

    let red = 0;
    let white = 0;
    let blue = nums.length - 1;
    let temp;

    while (white <= blue){
        if (nums[white] === 0){
            temp = nums[red]
            nums[red] = nums[white]
            nums[white] = temp
            white += 1;
            red += 1;
        } else if (nums[white] === 1){
            white += 1;
        } else {
            temp = nums[white]
            nums[white] = nums[blue]
            nums[blue] = temp
            blue -= 1;
        }
    }
};
