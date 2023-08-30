//var let const 

// Js has 2 versions es5 and es6
// es5->var
//es6-> let,const
//we study mixing of es5 and es6




//var function scoped hota hai
//let braces scoped hota hai

//var apne parent func mein kahi bhi use ho sakta hai
function abcd(){
  for(var i=0;i<12;i++){
    console.log(i);  //print 1 to 11
  }
  console.log(i); //12
}
//abcd();

function efgh(){
  for(let i=0;i<12;i++){
    console.log(i);  //print 1 to 11
  }
  // console.log(i); //ReferenceError: i is not defined
}
//efgh();


//var adds itself to the window objcts
//let doesn't add

//js main kuch chheje nahi hai ho hum use kar sakte hai , aur wo cheeje huma js mei nahi balki browser se milti hai,aise  saare feautures jo js mai use karte ho o chheeje hum doond sakte hai ek paticular object mai, wo hai window object

//window objects  //Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
//alert , console , prompt


