//selecting multiple elements in same time

var h=document.querySelectorAll("h1");
console.log(h); //NodeList(2) [h1, h1]

h.forEach((e)=>{
  console.log(e);  // <h1>Helooooooooo</h1>     <h1>Dom padhlo friends</h1>
})


// var x=document.querySelector('h1');
// x.innerHTML="bye"



var y=document.querySelector("#box");
y.innerHTML="<h1>helloooooooooooooooooooo</h1>"