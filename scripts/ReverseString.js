let ReverseStringOutput = document.getElementById("ReverseStringOutput");
let ReverseStirngInput = document.getElementById("ReverseStringInput");
let SubmitBtn = document.getElementById("SubmitBtn")

async function ReverseStringApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/reverseString/reverseString/${ReverseStringInput.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await ReverseStringApi(ReverseStringInput);
    ReverseStringOutput.textContent = output;
})