let string1=[3,4,7,1];
let string2=[71,42,78,16];

function mergeSort(arr1, arr2){
    
let merge=[...arr1,...arr2]

merge.sort((a,b)=>a-b);
return merge;
}

let result=mergeSort(string1,string2);
console.log(result);