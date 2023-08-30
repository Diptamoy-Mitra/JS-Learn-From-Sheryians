// this keyword
//this is a keyword in js which changes its vlue in different context
console.log(this) // in global object  its gives ----->   window
function abcd(){
  console.log(this); //Object [global]..........  window debe
}
abcd();

//ek function jo object ka andaar ho calles method
var obj={
  baatkaro: function(){
    console.log(this);     //Object
  }    //method
}
console.log(obj.baatkaro()) //object

// global ===> window    function===>window     method====>Object

var b=document.querySelector('button')
b.addEventListener('click',function(){
   this.style.color="red";  //button color red hoi jabe
})


