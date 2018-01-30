let sample = "45";

const combo = {
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  10: '',
};

const letterCombinations = (str) => {
  let result = [];
  if(str.length === 0) { return result; }

  const generator = (input, idx, curr) => {
    if(idx === input.length) {
      result.push(curr);
      return;
    }

    let letters = combo[input[idx]];

    for(let i = 0; i < letters.length; i++) {
      generator(input, idx + 1, curr + letters[i]);
    }
    return result;
  };

    generator(str, 0, '');
    return result;
};


console.log(letterCombinations(sample));
