const largest=(arr)=>{
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;    
};
const findMax = (arr)=> largest(arr);
    
let string = [1,23,4,3]
console.log(findMax(string));