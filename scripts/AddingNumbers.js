let AddingNumbersOutput = document.getElementById("AddingNumbersOutput");
let AddingNumbersInput = document.getElementById("AddingNumbersInput");
let AddingNumbersInputTwo = document.getElementById("AddingNumbersInputTwo");
let SubmitBtn = document.getElementById("SubmitBtn")

async function AddingNumbersApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/addingNumbers/RentMoney/${AddingNumbersInput.value}/${AddingNumbersInputTwo.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await AddingNumbersApi(AddingNumbersInput, AddingNumbersInputTwo);
    AddingNumbersOutput.textContent = output;
})  