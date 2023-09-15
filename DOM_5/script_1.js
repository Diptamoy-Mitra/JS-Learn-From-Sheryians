//DOM
//Document object model


//4 pilars of dom
//1. selection of an element
//2. changing html
//3. changing css
//4. event listner




var a=document.querySelector('h1');
console.log(a); //<h1>Dom padhlo friends</h1>

a.innerHTML="Changed HTML";

a.style.color='green';

a.style.backgroundColor='#000'


a.addEventListener('click',()=>{
      console.log("heyyyy")
})


//BULB 

var bulb=document.querySelector('#bulb');
var btn=document.querySelector('button')
var flag=0;

btn.addEventListener('click',()=>{
    if(flag===0){
      bulb.style.backgroundColor="yellow";
      btn.innerHTML="OFF";
      flag=1;
    }
    else{
      bulb.style.backgroundColor="transparent";
      btn.innerHTML="ON";
      flag=0;
    }
})












