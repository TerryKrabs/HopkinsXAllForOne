let GreaterThanOutput = document.getElementById("GreaterThanOutput");
let NumOne = document.getElementById("NumOne");
let NumTwo = document.getElementById("NumTwo");
let SubmitBtn = document.getElementById("SubmitBtn")

async function GreaterThanApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/HigherOrLower/HigherOrLower/${NumOne.value}/${NumTwo.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await GreaterThanApi(NumOne, NumTwo);
    GreaterThanOutput.textContent = output;
})