// callback functions

// jab bhi koi aisa code jo baad mai chaalta hai app likhoge, kiyoki code baad mein chaalta hai js ko ye paata nehi hota ke wo complete hua ya nahi,aise code ke completion par js ko bataya jata hai ke wo complete hogaya aur aap usee chalaa sakte hai ho, yee batana ke kaam callback ka hai

setTimeout(function(){
  console.log("2 sec baad chalau");    //this inner function is called callback func

},2000)




//what is first class functions??

//js mein ek concept hai jiska matlab hota hai ki functions ko use kr sakte ho as a value
var a=function(){
  console.log("Hiiiiiiiii")
}; //we can save a function also
function abcd(b){
  b(); //Hiiiii
}
abcd(a); //pass function as a value

