
function addNumber(arr){
    let sum=0;
    for(let i=0;i<arr.length; i++){
        sum+=arr[i];

    }
    return sum;
}

function calculateSum(n){
   return addNumber(n);
}

let string=[1,2,3,4,5];
console.log(calculateSum(string));