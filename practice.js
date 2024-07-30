arr=[1,2,3];
function avg(a,b,c){
    let ans=(a+b+c)/3;
    return ans;
}
let a=avg(...arr);
console.log(a);