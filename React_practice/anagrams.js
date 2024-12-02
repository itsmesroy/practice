function anagrams(arr1,arr2){
    let reversestr1=arr1.split("").reverse().join("");
    let reversestr2=arr2.split("").reverse().join("");
    return reversestr1==reversestr2;
}

let str1="listen"
let str2="silent"

if(anagrams(str1,str2)){
    console.log("Anagrams")
}else{console.log("not anagrams")}
