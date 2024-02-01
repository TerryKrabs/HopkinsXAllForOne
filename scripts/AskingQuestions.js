let AskingQuestionsOutput = document.getElementById("AskingQuestionsOutput");
let StringOne = document.getElementById("StringOne");
let StringTwo = document.getElementById("StringTwo");
let SubmitBtn = document.getElementById("SubmitBtn")

async function AskingQuestionsApi() {
    // .value is converting the output into whatever it was coded as

 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/addingStrings/HiltonHotel/${StringOne.value}/${StringTwo.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await AskingQuestionsApi(StringOne, StringTwo);
    AskingQuestionsOutput.textContent = output;
})