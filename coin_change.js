//Coin Change

function CoinChange(amount, coins){
  let combinations = new Array(amount + 1).fill(0); //cannot add to undefined
  combinations[0] = 1;

  for (let i=0; i<coins.length; i++) {
    for (let j=1; j<combinations.length; j++){
      if (j >= coins[i]){
        combinations[j] += combinations[j - coins[i]];
      }
    }
  }

  return combinations[amount];
}

function coinChange2(coins, amount){
  let combinations = new Array(amount + 1).fill(0); //cannot add to undefined
  combinations[0] = 1;

  for (let i=0; i<coins.length; i++) {
    for (let j=1; j<combinations.length; j++){
      if (j >= coins[i]){
        combinations[j] += combinations[j - coins[i]];
      }
    }
  }

  return combinations[amount];
}

let a = 12;
let b = [1,2,5];

console.log(CoinChange(a,b));
