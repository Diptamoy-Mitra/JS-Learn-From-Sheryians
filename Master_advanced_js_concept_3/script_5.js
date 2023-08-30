// call apply bind

//call
function abcd(v1,v2,v3){
  console.log(this); // {age:24} //object
  console.log(v1,v2,v3);//1 2 3
}
var obj={
  age:24
}
abcd.call(obj)

//apply
abcd.apply(obj,[1,2,3]) //{age:24} 1 2 3

//bind
function abc(){
  console.log(this);
}
var ff=abc.bind(obj) ;
ff(); //{ age: 24 }  //infuture lagle chalabo