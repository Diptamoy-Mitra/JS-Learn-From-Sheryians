// browser  conext api

//  1. window 2. stack 3. heap

//stack 
// its a container where function call stores

//heap
//jitne bhi variables ya data hum baanate hai unhe store kahi to karna padhta hai uske liye hota hai heap memory


//execution context
// iska matlab jab bhi hum function chaalayege func apna ek imaginary container bana lega uski teen cheeje hogi
// 1. variables 2. function inside that parent func 3. lexical enviroment of that function
//ye jo imaginary container hai ise hi execution context bolte hai

function abcd(){
  var a=12;
  function def(){
    var b=13;  //its access to nearest parent func def() , its not access in abcd();
  
  }
  // console.log(b); //ReferenceError: b is not defined
}
abcd();

//abcd ex c
// a                         def()
// lexical env

//lexical enviroment hota hai ek chart jisme ye likha hota hai ke apka particular function ki chhejo ko access kar sakta hai and kisko nahi,
