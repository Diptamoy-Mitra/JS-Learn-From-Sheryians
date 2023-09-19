const calculateButton=document.getElementById('calculate');
const resultDisplay=document.getElementById('result');

calculateButton.addEventListener('click', function (e) {
    //get user input
    const weight=parseFloat(document.getElementById("weight").value);
    const purity=parseFloat(document.getElementById("purity").value);
    const currentGoldPrice=parseFloat(document.getElementById("currentGoldPrice").value);
    const makingCharge=parseFloat(document.getElementById("makingCharge").value);
    const gst=parseFloat(document.getElementById("gst").value);


    //check logic rule implement
    if(isNaN(weight) ||  isNaN(purity) || isNaN(currentGoldPrice) ||isNaN(makingCharge)|| isNaN(gst)){
              resultDisplay.innerHTML="Please enter a valid numbers for all fields"
    }
    else{

      //calculation
      const goldValue=(weight*purity*currentGoldPrice)/24;
      const makingChargeAmount=(goldValue*makingCharge)/100;
      const gstAmount=(goldValue+makingChargeAmount) *(gst/100);
      const totalCost=goldValue+makingChargeAmount+gstAmount;
      resultDisplay.innerHTML=`
        <p>Total Gold Value: Rs ${goldValue.toFixed(2)}/- </p>
        <p>Making Charge Value: Rs ${makingChargeAmount.toFixed(2)}/- </p>
        <p>GST Amount Charge Value: Rs ${gstAmount.toFixed(2)}/- </p>
        <p>Total Cost Of Gold Value: Rs ${totalCost.toFixed(2)}/- </p>

      `

    }




  
})