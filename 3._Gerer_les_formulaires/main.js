// exercice 1

let formUser = document.getElementById("fromUser");
let btnSubmit = document.querySelector(".btnSubmit");
let text = document.querySelector(".informationUser");

btnSubmit.addEventListener("click", (e => {
    e.preventDefault();
    text.textContent = "";
    console.log(document.forms[0].age.value)
    console.log(document.forms[0].name.value)
    console.log(document.forms[0].surname.value)
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