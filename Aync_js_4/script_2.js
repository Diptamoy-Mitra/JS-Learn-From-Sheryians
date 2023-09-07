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
// var b=new Promise((res,rej)=>{
//   var m=Math.floor(Math.random()*10);
//   if(m<5){
//     return res();
//   }
//   else{
//     return rej();
//   }
// })

// b.then(()=>{
//   console.log('below 5');
// })
// .catch(()=>{
//   console.log('above 5')
// })



//example 2
//sabse pehele gate par auu, gate kholo aur gate lagau, khana pakkau khanna khao, incognito mode chalau, sojau kyuki tum thak gaii ho
var p1=new Promise((res,rej)=>{
  return res("sabse pehele gate par auu");
})
var p2=p1.then((data)=>{
  console.log(data);
  return new Promise((res,rej)=>{
    return res("gate kholo aur gate lagau");
  })
})
var p3=p2.then((data)=>{
  console.log(data);
  return new Promise((res,rej)=>{
    return res("khana pakkau khanna khao");
  })
})
var p4=p3.then((data)=>{
  console.log(data);
  return new Promise((res,rej)=>{
    return res("incognito mode chalau");
  })
})
var p5=p4.then((data)=>{
  console.log(data);
  return new Promise((res,rej)=>{
    return res("sojau kyuki tum thak gaii ho");
  })
})
var p6=p5.then((data)=>{
  console.log(data);
})

//OUTPUT
// sabse pehele gate par auu
// gate kholo aur gate lagau
// khana pakkau khanna khao
// incognito mode chalau
// sojau kyuki tum thak gaii ho
