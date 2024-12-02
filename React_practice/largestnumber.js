const largest=(arr)=>{
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;    
};
const findSecondMax = (arr)=> {
    let max= largest(arr);
    let second=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>second && arr[i]<max){
            second=arr[i];
        }
    }
    return second;
};
    
let string = [1,23,4,6]
console.log("Largest:",largest(string));
console.log("Second:",findSecondMax(string))