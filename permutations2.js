function permutations(array) {
    const results = new Array();
    permutationsHelper(array, 0, results);
    return results;
}

function permutationsHelper(array, start, result){
    if (start >= array.length) {
        result.push(array.slice());
    } else {
        for (let i = start; i < array.length; i++){
            swap(array, start, i);
            permutationsHelper(array, start + 1, result);
            swap(array, start, i);
        }
    }
}

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

const input = [1,2,3];
console.log(permutations(input));