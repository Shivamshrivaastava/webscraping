let arr = [2,3,4,5,6];
let addition=arr.reduce(function(sum,value){
    let ans = sum+value;
    return ans;
},0)
console.log(addition);