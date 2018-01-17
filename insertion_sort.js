function insertionSort1(n, arr) {
    // Complete this function
    let temp;
    console.log("input", arr);
    for (let i=1; i<n; i++){
        let current = arr[i];
        let j = i-1;
        while (j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j -= 1;
        }
        arr[j+1] = current;
    }
    console.log("after", arr);
}

let test1 = [ 2, 4, 6, 8, 3 ];
current = 4
j = 0
arr[j] = 2
arr[0+1] = 4
=========
current = 6
j = 1
arr[j] = 4
arr[1+1] = 6
=========
current = 8
j = 2
arr[j] = 6
arr[2+1] = 8
=========
i = 4
current = 3
j = 3
arr[j] = 8
arr[3+1] = 3
arr[3] = 8
j--
arr[2+1] = 3
