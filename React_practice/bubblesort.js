function bubblesort(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }        
    }
    return arr;
}
let array=[1,5,3,2]
console.log(bubblesort(array));