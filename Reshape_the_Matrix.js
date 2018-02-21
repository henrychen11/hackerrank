let a = [[1,2], [3,4]];
let b = 4;
let c = 1;

// The ...(spread operator) works by returning each value from index 0 to index length-1:
//
// As example:
//
// [...'18'] // returns ['1', '8']
// which would be the same as:
//
// ['18'[0], '18'[1]]

var matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !== r * c){
        return nums;
    }
    let temp = [];
    let result = [...Array(r)].map(i => Array(c));
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums[i].length; j++){
            temp.push(nums[i][j]);
        }
    }


    for (let a=0; a<r; a++){
        for (let b=0; b<c; b++){
            result[a][b] = temp.shift();
        }
    }

    return result;
};

console.log(matrixReshape(a,b,c));
