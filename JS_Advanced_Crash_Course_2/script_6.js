//How arrays made behind the scenes

var arr=[1,2,3,4,5,6]
console.log(typeof arr); //object

arr[-2]=3;
console.log(arr) ; //[ 1, 2, 3, 4, 5, 6, '-2': 3 ]

console.log(Array.isArray([])) ; //true
console.log(Array.isArray({})) ; //false


//How to delete object props

var a={
  name:"Dipto",
  age:"23"
}
//want to remove age
delete a.age;
console.log(a) ; //{ name: 'Dipto' }