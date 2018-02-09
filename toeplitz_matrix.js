let test = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];

var isToeplitzMatrix = function(matrix) {
    // console.log(matrix);
    for(let i=0; i<matrix.length; i++){
      for (let j=0; j<matrix[0].length; j++){
        if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
      }
    }
    return true;
};

console.log(isToeplitzMatrix(test));
