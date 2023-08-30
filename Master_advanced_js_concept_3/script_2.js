// Constructors functions

//normal function jismein this ka istimaal ho and aap func ko call karke wakt new keyword use karein
function saanchaOfBiscuit(){
  this.width=12;
  this.height=10;
  this.color="brown";
  this.taste="sugar"

}
var bis1=new saanchaOfBiscuit();
var bis2=new saanchaOfBiscuit();
console.log(bis1)  //saanchaOfBiscuit {   width: 12, height: 10,  color: 'brown', taste: 'sugar' }

//Its a function whenever invoked with "New Keyword" ,Returns an object,If we use "This" keyword inside that function,it returns an object with all of the properties and methods mentioned inside that function with this keyword.


 
//new keyword
// jab bhi new laagta hai hamesha aek blank object bana lo, then call karo function

function abcd(){
  this.age=13;
}

var b=new abcd(); //{ } 


// IIFE 
//immediately invoked function expression 
// function ko turant chaalane ki kalaa, is tareeke se ki hum log koi private variales banaa paaye

var ans=(function(){
   var privateValue=12; //we can't access in baahaar, its private variable, its access only inside IIFE

   return {
      getter: function(){
        console.log(privateValue)
      },
      setter: function(v){
        privateValue=v;
      }
   }
})();

console.log(ans) //{ getter: [Function: getter] }
ans.getter(); //12
ans.setter(1334);
ans.getter() ; //1334






































































































































































































































































































