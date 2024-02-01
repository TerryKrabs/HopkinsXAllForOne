let SayHelloOutput = document.getElementById("SayHelloOutput");
let SayHelloInput = document.getElementById("SayHelloInput");
let SayHelloBtn = document.getElementById("SayHelloBtn")

async function SayHelloApi() {
    // .value is converting the output into whatever it was coded as
    let sayHello = SayHelloInput.value;
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/api/SayHelloEndPoint/GetName/${sayHello}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SayHelloBtn.addEventListener('click', async function(e){
  const output = await SayHelloApi(SayHelloInput);
    SayHelloOutput.textContent = output;
})