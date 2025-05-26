// exercice 1

let exercice1Container = document.getElementById("exercice1");
let ulContainer = document.querySelector("ul");
let listArray = ["Fraise", "Boeuf", "Farine", "Sucre"];
let listDiv = "";
listArray.forEach((element, index) => {
    ulContainer.innerHTML += `<li>${index + 1}. ${element}</li>`;
})


// exercice 2

let exercice2Container = document.getElementById("exercice2");
let boutonPlus = document.querySelector(".plus");
let boutonMoins = document.querySelector(".moins");
let span = document.querySelector(".compteur");
let compteur = 0;
span.innerHTML = compteur;

boutonPlus.addEventListener("click", () => {
    compteur++;
    console.log(compteur);
    span.innerHTML = compteur;
})

boutonMoins.addEventListener("click", () => {
    compteur < 1 ? compteur = 0 : compteur--;
    console.log(compteur);
    span.innerHTML = compteur;
})