let arr="level";

let reverse=arr.split("").reverse().join("");

if(arr===reverse){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}