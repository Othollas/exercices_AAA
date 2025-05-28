// exercice 1

let formUser = document.getElementById("fromUser");
let btnSubmit = document.querySelector(".btnSubmit");
let text = document.querySelector(".informationUser");

btnSubmit.addEventListener("click", (e=>{
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