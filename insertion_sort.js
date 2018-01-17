function insertionSort1(n, arr) {
    // Complete this function
    let temp;
    console.log("input", arr);
    for (let i=1; i<n; i++){
        let current = arr[i];
        let j = i-1;
        while (j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j -= 1
        }
        arr[j+1] = current;
    }
    console.log("after", arr);
}
