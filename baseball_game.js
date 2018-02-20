var calPoints = function(ops) {
    let sum = parseInt(ops[0]);
    let history = [];
    for (let i=1; i<ops.length; i++){
        if (Number.isInteger(parseInt(ops[i]))){
            sum += parseInt(ops[i]);

        } else if (ops[i] === "D"){
            console.log('inside D')
            sum = sum * 2;

        } else if (ops[i] === "C"){
            console.log('inside C', sum, parseInt(ops[i-1]))
            sum = sum - parseInt(ops[i-1]);

        } else if (ops[i] ==="+"){
            history.push(sum);
            console.log('inside +',history[history.length - 1], history[history.length - 2] )

            sum = sum + history[history.length - 1] + history[history.length - 2];
        }
        history.push(sum);
        console.log("current", sum, history)
    }

    return sum;
};

let input = ["5","-2","4","C","D","9","+","+"];
console.log(calPoints(input));
