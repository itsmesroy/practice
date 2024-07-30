const h1Element=document.getElementById("heading");
const increasingElement1=document.getElementById("increasingElement");
const decreasingElement1=document.getElementById("decreasingElement");
const counter1=document.getElementById("counter");


 let see="hi! whatsup";
 h1Element.innerHTML=see;
 
increasingElement1.addEventListener("click",() => {
  let numberIncrease=Number(counter1.innerHTML)+1;
  counter1.innerHTML=numberIncrease;
});
decreasingElement1.addEventListener("click" ,() =>{
  let numberDecrease=Number(counter1.innerHTML)-1;
  counter1.innerHTML=numberDecrease;
})
