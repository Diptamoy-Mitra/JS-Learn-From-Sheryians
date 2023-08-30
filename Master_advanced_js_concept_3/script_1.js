// High order function
//esa function jo accept karle or ek function or return karde or ek function
function abcd(val){  //abcd() high order function
   val();

}
abcd(function(){
  console.log("Am going to abcd")
})



//foreach also higher order function
var arr=[1,2,3]

arr.forEach(function(i){
  console.log(i) //1,2,3
})





