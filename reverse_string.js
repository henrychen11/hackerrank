var reverseWords = function(s) {
    let result = '';
    let words = s.split(' ');
    for (let i=0; i<words.length; i++){
        for (let j=words[i].length-1; j>=0; j--){
            result += words[i][j];
        }
        if(i !== words.length-1) result += ' ';
    }
    return result;
};
