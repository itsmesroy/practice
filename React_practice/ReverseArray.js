let arr="Hello Hie"

function reverseString(){
    let reverse=arr.split("").reverse().join("");
    return reverse;
}
console.log(reverseString(arr));
