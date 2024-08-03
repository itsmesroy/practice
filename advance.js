// Getting all elements
const h1Element=document.getElementById("heading");
const increasingElement1=document.getElementById("increasingElement");
const decreasingElement1=document.getElementById("decreasingElement");
const counter1=document.getElementById("counter");
const counter2Element=document.getElementById("counter2");
const fnameElement= document.getElementById("fname");
const submitElement=document.getElementById("submit")

// Simple DOM Manipulation
 let see="hi! whatsup";
 h1Element.innerHTML=see;
 
//  Playing with counter increase and decrease feature through click
increasingElement1.addEventListener("click",() => {
  let numberIncrease=Number(counter1.innerHTML)+1;
  counter1.innerHTML=numberIncrease;
});
decreasingElement1.addEventListener("click" ,() =>{
  let numberDecrease=Number(counter1.innerHTML)-1;
  counter1.innerHTML=numberDecrease;
})

//  Diplaying whatever is written in the input box
fnameElement.addEventListener("input",(eventObj) =>{
    console.log(eventObj);
    const elementtobeShown=eventObj.target;
    const number= elementtobeShown.value;
    if(!number){
        counter2Element.innerHTML="0";
    }else{
        counter2Element.innerHTML=number;
    }
    
    console.log("INPUT EVENT");
});

// Mock fetch api
async function getApiData(){
  let url= await fetch("https://demo0802490.mockable.io/");
  let data=await url.json;
  return data;
}
let getData =await getApiData();


// Selecting color

const targetElement=document.getElementById("target");
const colorElement=document.getElementById("color")

colorElement.addEventListener("click",(eventObj)=>{
    let finalColor=eventObj.target.id;
    targetElement.innerHTML=`Selected color: ${finalColor} `;
    targetElement.style.background= finalColor;
})