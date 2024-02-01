let OddEvenOutput = document.getElementById("OddEvenOutput");
let OddEvenInput = document.getElementById("OddEvenInput");
let SubmitBtn = document.getElementById("SubmitBtn")

async function OddEvenApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/OddOrEven/OddOrEven/${OddEvenInput.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await OddEvenApi(OddEvenInput);
    OddEvenOutput.textContent = output;
})