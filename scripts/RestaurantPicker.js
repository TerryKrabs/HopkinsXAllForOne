let RestaurantOutput = document.getElementById("RestaurantOutput");
let RestaurantInput = document.getElementById("RestaurantInput");
let SubmitBtn = document.getElementById("SubmitBtn")

async function RestaurantPickerApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/RestaurantP/Breakfast/${RestaurantInput.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await RestaurantPickerApi(RestaurantInput);
    RestaurantOutput.textContent = output;
})