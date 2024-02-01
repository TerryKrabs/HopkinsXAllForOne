let ReverseNumberOutput = document.getElementById("ReverseNumberOutput");
let ReverseNumberInput = document.getElementById("ReverseNumberInput");
let SubmitBtn = document.getElementById("SubmitBtn")

async function ReverseNumberApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/ReverseInt/ReverseInt/${ReverseNumberInput.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await ReverseNumberApi(ReverseNumberInput);
    ReverseNumberOutput.textContent = output;
})