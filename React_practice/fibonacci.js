function fibonacci(n){
    if(n<=1){
        return n
    }
    let a=0;
   let b=1;
   for(let i=2;i<=n;i++){
    temp=a+b;
    a=b;
    b=temp;   
}
return b;
}

function fibonacciRecursive(n){
    if(n<=1)return n;
    return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
}

let sequence=[];
for(let i=0;i<=10;i++){
    sequence.push(fibonacciRecursive(i))
}
console.log(sequence);

console.log(fibonacci(10));