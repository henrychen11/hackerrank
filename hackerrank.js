arr = [1,4,4,4,5,3];

function migratoryBirds(n, ar) {
    // Complete this function
    let result = {};
    let visited = [];
    let max;
    
    ar.forEach( (el) => {
        if (visited.includes(el) === false){
            visited.push(el);
            result[el] = 1;
        } else {
            result[el] += 1;
        }
    });
    console.log("result", result)
    return Object.keys(result).reduce( (a, b) => {
        console.log("inside", a, b, result[a], result[b], result[a] > result[b]);
        if (result[a] > result[b]){
            return a;
        } else {
            return b;
        }
    });
}

console.log(migratoryBirds(6, arr));



// let min;
// let max;

// for (let i=0; i<a.length; i++){
//     let sum = 0;
//     for(let j=0; j<a.length; j++){  
//         if (i !== j){
//             //console.log(a[i],a[j])
//             sum += a[j];
//         }
//     }
//     //console.log("sum",sum);
//     if (sum > max || !max){
//         max = sum;
//     } else if (sum < min || !min){
//         min = sum;
//     }
// }

// console.log(min, max);