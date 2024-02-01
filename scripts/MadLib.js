//string Name1, string NounOne, string AdjectiveOne, string Activity, string VerbOne, string NameTwo, string NounTwo, string Namethree, string NounThree, string ptVerb, string SongName, string AdjectiveTwo, string NameFour, string AdjectiveThree);

let MadLibOutput = document.getElementById("MadLibOutput");
let NameOne = document.getElementById("NameOne");
let NounOne = document.getElementById("NounOne");
let AdjectiveOne = document.getElementById("AdjectiveOne");
let Activity = document.getElementById("Activity");
let VerbOne = document.getElementById("VerbOne");
let NameTwo = document.getElementById("NameTwo");
let NounTwo = document.getElementById("NounTwo");
let Namethree = document.getElementById("Namethree");
let NounThree = document.getElementById("NounThree");
let ptVerb = document.getElementById("ptVerb");
let SongName = document.getElementById("SongName");
let AdjectiveTwo = document.getElementById("AdjectiveTwo");
let NameFour = document.getElementById("NameFour");
let AdjectiveThree = document.getElementById("AdjectiveThree");


let SubmitBtn = document.getElementById("SubmitBtn")

async function MadLibApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`https://hopkinsxallforone.azurewebsites.net/MadLib/MadLib/${NameOne.value}/${NounOne.value}/${AdjectiveOne.value}/${Activity.value}/${VerbOne.value}/${NameTwo.value}/${NounTwo.value}/${Namethree.value}/${NounThree.value}/${ptVerb.value}/${SongName.value}/${AdjectiveTwo.value}/${NameFour.value}/${AdjectiveThree.value}`)
 const data = await promise.text();
 console.log(data);
 return data;
}
SubmitBtn.addEventListener('click', async function(e){
  const output = await MadLibApi(NameOne.value, NounOne.value, AdjectiveOne.value, Activity.value, VerbOne.value, NameTwo.value, NounTwo.value, Namethree.value, NounThree.value, ptVerb.value, SongName.value, AdjectiveTwo.value, NameFour.value, AdjectiveThree.value);
    MadLibOutput.textContent = output;
})


