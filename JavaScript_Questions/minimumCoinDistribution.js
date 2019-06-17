// Given an amount in USD and number of coins of each type of coin, output the minimum coins needed to make that amount.

const coins = {
    penny:12,
    nickel:10,
    dime:2,
    quarter:12,
    dollar:30
}

const valueInPenny = {
    penny:1,
    nickel:5,
    dime:10,
    quarter:25,
    dollar:100
}

function findMinimumCoins(coins,amount){
    let coinValue = [];
    for(let val in valueInPenny){
        coinValue.push({
            coinType:val,
            value:valueInPenny[val],
            quantity:coins[val]
        });
    }
    let coinValueReverse = coinValue.reverse();
    let len = coinValueReverse.length;
    let amountInPenny = amount*100;
    let count = 0;
    for(let i=0;i<len && amountInPenny>0;i++){
        let rem = amountInPenny%coinValueReverse[i].value;
        let coinsUsed = (amountInPenny-rem)/coinValueReverse[i].value;
        if(coinsUsed<=coinValueReverse[i].quantity){
            coinValueReverse[i].quantity-=coinsUsed;
            count+=coinsUsed;
            amountInPenny = rem;
        }
    }

    return count===0?"This amount requires more coins":count;
}

// 20 dollars 47 penny => can be split into 20 dollar, 1 quarter, 2 dim, 2 penny => total 25 coins
console.log(findMinimumCoins(coins,20.47)); // 25 coins