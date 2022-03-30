let transactions = [10000,3000,4000,2000,-898,3800,-4500];
let val = 74;
let trans = transactions.map(function(n){
    return(n/val).toFixed(2);
})
console.log(transactions);
console.log(trans);