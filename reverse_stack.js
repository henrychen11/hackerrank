
function insertAtBottom(stack){
    if (stack.length === 0){
        return stack;
    }

    let temp = stack.pop();
    insertAtBottom(stack, temp);
    return stack;
}

function insertAtBottomHelper(stack, x){
    if(stack.length === 0) {
        stack.push(x);
        return;
    }
    let temp = stack.pop;
    insertAtBottom(stack, x);
    stack.push(temp);
}

let input = [1,2,3,4,5];
console.log(insertAtBottom(input));

