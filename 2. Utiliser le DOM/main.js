let btnHidden = document.querySelectorAll(".btnHidden");

let containerHidden = document.querySelectorAll(".hidden");
console.log(containerHidden)
btnHidden.forEach(bouton => bouton.addEventListener("click", () => {
    let nbtarget = bouton.dataset.target;
    containerHidden.forEach(container => {
        if(container.dataset.target == nbtarget){
            container.classList.toggle("hidden")
        }
    });
}))


// exercice 1

let exercice1Container = document.getElementById("exercice1");
let ulContainer = document.querySelector(".ulContainer");
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

// Exercice 3

let imgKuroTora = document.querySelector(".imgKuroTora");
let butonHide = document.querySelector(".btnHide");
console.log(imgKuroTora.classList.contains("hidden"));

butonHide.addEventListener("click", ()=>{
    imgKuroTora.classList.toggle("hidden");
    if(imgKuroTora.classList.contains("hidden")){
        butonHide.textContent = "Montrer l'image";
    }else{
        butonHide.textContent = "Cacher l'image"
    }
})

// Exercice 4
let chronoSpan = document.querySelector(".chrono");
let chrono = 0;
chronoSpan.innerHTML = chrono;
let startPause = document.querySelector(".startPause");
let reset = document.querySelector(".reset");
let run = false;

startPause.addEventListener("click", ()=>{
    if(run == false){
        run = true;
        startPause.textContent = "Pause";
         id =  setInterval(()=>{
            
        chrono++;
        
        chronoSpan.innerHTML = chrono
    }), 1}else{
        startPause.textContent = "Start";
        run = false
        clearInterval(id)
    }
    
console.log(run)
})

reset.addEventListener("click", ()=>{
    clearInterval(id);
    run = false;
    startPause.textContent = "Start"
    chrono = 0;
    chronoSpan.textContent = chrono;
    
})
