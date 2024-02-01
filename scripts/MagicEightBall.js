let EightBallOutput = document.getElementById("EightBallOutput");
let EightBallInput = document.getElementById("EightBallInput");
let SubmitBtn = document.getElementById("SubmitBtn")

async function MagicEightBallApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/EightBall/EightBall/${EightBallInput.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await MagicEightBallApi(EightBallInput);
    EightBallOutput.textContent = output;
})