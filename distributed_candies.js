
var distributeCandies = function(candies) {
    let hash = {};

    for (let i=0; i<candies.length; i++){
        if (hash[candies[i]]){
            hash[candies[i]] += 1;
        } else {
            hash[candies[i]] = 1;
        }
    }


    let half = candies.length / 2;
    let size = Object.keys(hash).length;

    if (size >= half){
        return half;
    } else {
        return size;
    }

};

let test = [1,1,1,1,1,1,2,3];
console.log("length", test.length);
//half = 4
//size = 3

console.log(distributeCandies(test));
