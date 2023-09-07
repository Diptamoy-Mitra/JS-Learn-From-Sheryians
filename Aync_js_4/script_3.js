//async await

//koi bhi aisa function async code likhenge, kyoki async code hai to aap promises ka istimaal kar saakte hai, jab uska ans ayenga aapko then aapko laagna padeka, us then ko laagane ko baachne keliye , aap async await ka istimaal kar sakte hai
async function abcd() {
 let raw=await fetch(`https://randomuser.me/api/`);
 let a= await raw.json();
  console.log(a);  //{results: Array(1), info: {…}}
}
abcd();


