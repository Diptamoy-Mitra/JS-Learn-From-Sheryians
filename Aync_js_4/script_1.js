// sync matlab ek ke bad dusre hoga, jab tak command complete na ho, dusre suru nehi hoga

//async ka matlab saare kaam ek saath strt kardo, jiska answer pahle aajaye uska jawaab dedena




// in sync ek ke baad ek complete hogi serially so max lagega 23 sec khatam hone pe, in async all start in parralally, so max 15 sec lagegi khatam hone pe
//task a - 5
//task b - 2
//task c - 15
//task d - 1


//async achieve hogi using ----->  
/* setInterval
setTimeout
Promise
fetch
axios
XMLHttpRequest
*/

//async js
//fb se photo lauu aur jab photo ajjaye show kar dena
// setTimeout(callback,time in ms );

console.log("hey");
setTimeout(function(){
    console.log("hey 2");
},2000);
//callback function hamesa async code mei ans aane par chalta hai

//jo bhi main stack pe hota hai wo output karta hai and jo bhi side stack pe hoti hai wo behind the scenes proccessing kar sakta hai, aur jab uski proccessing complete ho use main stack pe laa kar challa sakta hai













