function permutations(array) {
    const results = new Array();
    permutations(a, 0, results);
    return results;
}

function permutationsHelper(array, start, result){
    if (start >= array.length) {
        result.push(array.slice());
    } else {
        for (let i=0; i < array.length; i++){
            swap(array, start, i);
            permutations(a, start + 1, result);
            swap(array, start, i);
        }
    }
}

function swap(array, idx1, idx2) {
    let temp = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = temp;
}

const input = [1,2,3];
console.log(permutations(input));