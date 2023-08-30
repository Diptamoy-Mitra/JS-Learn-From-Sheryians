// Prototype
//its a collection of buit in helper methods that are availble in browser when we create an object
var obj={
  name:"harsh"
}
console.log(obj); //{name: 'harsh'}  [[Prototype]]: Object


//prototype inheritance
// its basically passing parent's features to their childrens, to do the same thing in js with the help of prototype is called protype inheritance
var human={
   canFly:false,
   canTalk:true,
   canWalk:true,
   haveEmotions:true,
}

var sheriyansStudent={
  canMakeAmazingWebsite:true,
}
//borrow human property
sheriyansStudent.__proto__=human;
console.log(sheriyansStudent);  
/* 
  canMakeAmazingWebsite: true [[Prototype]]: ObjectcanFly: falsecanTalk: truecanWalk: truehaveEmotions: true  [[Prototype]]: Object
*/