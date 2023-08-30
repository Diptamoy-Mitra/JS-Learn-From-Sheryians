 // truthy vs falsy

 //js main kuch  bhi likho wo mainly do prakkar mein kisi ek prakkar ko belong karti hai
 // falsy values ye hai = 0, false, undefined, null, NaN, document.all
 //truthy values all

 if(7){
  console.log("iiii")  //this print always if if(truthy)
 }
 else{
  console.log("kkk") //if if(falsy) then it runs
 }

 //foreach loop
 //its run only in array, jabhi array ho then use it
//forEach kabhi bhi main array mai change nehi karta wo aapka changes karke deta hai array ki temporary copy par .
 var arr=[1,2,3,4,5,6]
 arr.forEach(function(val){
   console.log(val+2); //3 4 5 6 7 8
 })

 //for in loop
 //objects pe loop karne keliye hota hai for in loop

 var obj={
  name:"harsh",
  city:"kolkata"
 }
 for(var key in obj){
  console.log(key,"---",obj[key]);  //name --- harsh       city --- kolkata
 }

 //do while loop
 var a=15;
 do{
  console.log("hey"); //hey
  a++;
 }while(a<15);

