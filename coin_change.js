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
  console.log(combinations)
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
  console.log(combinations)
  return combinations[amount];
}


function waysToReturnMemoize(amount, denominations) {
  // intialize an array of zeros with indices up to amount
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
      waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;

  for (var j = 0; j < denominations.length; j++) {
      // we can only start returning change with coins in our denominations
      var coin = denominations[j];
      
      // we start bottom up, each time reducing change amout with curr coin.
      for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
          var higherAmountRemainder = higherAmount - coin;
          // ways to create change is equivalent to reducing the problem to a known problem
          // and gaining all the ways to solve for smaller problems
          waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      }
  }

  return waysOfDoingNcents[amount];
}

var denominations = [1, 2, 3];
var amount = 4;
console.log(waysToReturnChange(denominations, denominations.length - 1, amount));
console.log(waysToReturnMemoize(amount,denominations));


let a = 11;
let b = [1,2,5];

console.log(CoinChange(a,b));
