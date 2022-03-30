function filter(arr,prefn){
    let result=[]
 for(let i = 0; i<arr.length;i++){
     if(prefn(arr[i],i,arr)){
         result.push(arr[i]);
     }
 }
 return result;
}
let arr = [1,2,3,4,5,6,7,8,9]
let prefn = x=>x%2===0;
let evenno = filter(arr,prefn);
console.log(evenno)