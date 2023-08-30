// how copy reference values

var a=[1,2,3,4];
var b=a; //its reference

b.pop(); //remove one value

console.log(a); //[ 1, 2, 3 ]
console.log(b); //[ 1, 2, 3 ]


//how copy values only
var c=[3,4,5,6];
var d=[...c];  //spread operator //copy only values
d.pop();
console.log(d); //[ 3, 4, 5 ]
console.log(c); //[ 3, 4, 5, 6 ]

var obj={
  name:"harsh",
  type: "int"
}
var copobj={...obj};
console.log(copobj); //{ name: 'harsh', type: 'int' }