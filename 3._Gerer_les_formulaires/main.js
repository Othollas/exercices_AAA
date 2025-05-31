let btnHidden = document.querySelectorAll(".btnHidden");
console.log(btnHidden)
let containerHidden = document.querySelectorAll(".hidden");
btnHidden.forEach(bouton => bouton.addEventListener("click", () => {
    let nbtarget = bouton.dataset.target;
    console.log(nbtarget)
    containerHidden.forEach(container => {
        if(container.dataset.target == nbtarget){
            container.classList.toggle("hidden")
        }
    });
}))
// exercice 1

let formUser = document.getElementById("fromUser");
let btnSubmit = document.querySelector(".btnSubmit");
let text = document.querySelector(".informationUser");

btnSubmit.addEventListener("click", (e => {
    e.preventDefault();
    text.textContent = "";
    let name = document.forms[0].surname.value;
    let surname = document.forms[0].name.value;
    let age = document.forms[0].age.value;
    text.innerHTML = `Bonjour ${name} ${surname}, vous avez ${age} ans`
}))

// exercice 2


let loginContainer = document.getElementById("loginContainer");

let nickname = "";
let isLog = false;


let loginFalse = `<form action="" method="" id="formLogin">
                <input type="text" name="formLoginickname" id="formLogin">
                <input type="password" name="formLoginPassword" id="formLoginPassword">
                <button type="submit" class="btnLogin">Envoyer</button>
            </form>`;


            localStorage.clear()
// localStorage.setItem("loginNickname", "Damien");
// localStorage.setItem("loginPassword", "XXXXXXX")

localStorage.getItem("loginNickname") ? isLog = true : isLog = false;

isLog === true ? isConnected() : loginContainer.innerHTML = loginFalse;;





function isConnected() {
        nickname = localStorage.getItem("loginNickname");
        loginContainer.innerHTML =  `Bienvenue ${localStorage.getItem("loginNickname")}`;
}



function isNotConnected() {
    loginContainer.innerHTML = loginFalse;
    document.querySelector(".btnLogin").addEventListener("click", (e) => {
        e.preventDefault();
        console.log("non")
        console.log(localStorage.getItem("loginNickname"))
    })
}

async function hashSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function comparePassword(input, storedHash) {
  const inputHash = await hashSHA256(input);
  return inputHash === storedHash;
}


// exercice 3

let non = document.getElementById("non");
let oui = document.getElementById("oui");
let nomDateEntreprise = document.getElementById("nomDateEntreprise");

non.addEventListener("change", ()=>{
    if(non.checked === true){
        nomDateEntreprise.classList.add("hidden");
    }
})

oui.addEventListener("change", ()=>{
     nomDateEntreprise.classList.remove("hidden");
})