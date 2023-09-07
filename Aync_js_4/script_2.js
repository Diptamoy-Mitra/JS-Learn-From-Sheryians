//callback humesha ek function hota hai, ye sirf tab chalta hai jab async code complete hoo jaii

// setTimeout(() => {
//     //10sec bad chalega
//     console.log("10 sec baad")
// }, 10000);

// var ans=fetch(`https://www.google.com`)

//async code likhne keliye
/* 
 fetch
 XHttpRequest
 axios
 promises
 settimeout
 setinterval
*/

//promises
//resolve hole then() 
//reject hle catch 
// let a=new Promise((res,rej)=>{
//    if(true){
//     return res();
//    }
//    else{
//     return rej();
//    }
// })
// a.then(()=>{
//   console.log("Resolve")
// })
// .catch(()=>{
//   console.log("reject")
// })


//example
//user will ask for a no. between 0 to 9 amd if the no. below 5 , resolve if not reject
var b=new Promise((res,rej)=>{
  var m=Math.floor(Math.random()*10);
  if(m<5){
    return res();
  }
  else{
    return rej();
  }
})

b.then(()=>{
  console.log('below 5');
})
.catch(()=>{
  console.log('above 5')
})