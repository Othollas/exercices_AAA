let btnHidden = document.querySelectorAll(".btnHidden");
let containerHidden = document.querySelectorAll(".hidden");
let butonSubmit = document.querySelector(".ageSubmit");

btnHidden.forEach(bouton => bouton.addEventListener("click", () => {
    let nbtarget = bouton.dataset.target;
    containerHidden.forEach(container => {
        // container.classList.add("hidden"); // Permet de fermer tout les onglets avant d'ouvrir l'onglet choisi, probleme, l'onglet ne peut plus se fermer.
        if(container.dataset.target == nbtarget){
            container.classList.toggle("hidden")
        }
    });
}))


butonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let age_major = document.querySelector(".major");
    let age_minor = document.querySelector(".minor");
    let input = document.getElementById("input_age");
    let age = input.value;
    input.value = "";
    console.log(age)
    if (age >= 18) {
        age_major.classList.remove("hidden");
        setInterval(() => age_major.classList.add("hidden"), 1000);
    }
    if (age < 18 && age >= 1) {
        age_minor.classList.remove("hidden");
        setInterval(() => age_minor.classList.add("hidden"), 1000);
    }
})

// -----------------------------------------------------

// exercice 2 

let chiffre_a_deviner = Math.floor(Math.random() * 100);

let jouer = document.getElementById("jouer");
let rejouer = document.getElementById("rejouer");
let gagnant = document.getElementById("succes");
let perdu = document.getElementById("perdu");
let trop_bas = document.getElementById("bas");
let trop_haut = document.getElementById("haut");
let score = 3

jouer.addEventListener("click", () => {
    let chiffre_utilisateur = document.getElementById("chiffre_utilisateur").value;
    trop_bas.classList.add("hidden");
    trop_haut.classList.add("hidden");
    rejouer.classList.add("hidden");

    if (chiffre_a_deviner > chiffre_utilisateur && score != 0) {
        trop_bas.classList.remove("hidden");
        score -= 1;
    } else if (chiffre_a_deviner < chiffre_utilisateur && score != 0) {
        trop_haut.classList.remove("hidden");
        score -= 1;
    } else if (chiffre_a_deviner == chiffre_utilisateur) {
        gagnant.classList.remove("hidden");
        jouer.disabled = true;
        rejouer.classList.remove("hidden");
    } else if (score === 0) {
        perdu.classList.remove("hidden");
        rejouer.classList.remove("hidden");
    }
})

rejouer.addEventListener("click", () => {
    chiffre_a_deviner = Math.floor(Math.random() * 100);
    rejouer.classList.add("hidden");
    perdu.classList.add("hidden");
    gagnant.classList.add("hidden");
    score = 3;
    jouer.disabled = false
})

// exercice 3
// crée une fonction pour vérifier si la personne peut regarder ce film

let btn_inscription = document.getElementById("bouton_inscription");


btn_inscription.addEventListener("click", (e) => {
    e.preventDefault();
    let plus_que_18 = document.getElementById("plus_que_18").value;
    let habite_a_bordeaux = document.getElementById("habite_a_bordeaux").value;

    inscription_bibliotheque(plus_que_18, habite_a_bordeaux)
})

function inscription_bibliotheque(age, lieu) {
    if (age == "oui" && lieu == "oui") {
        console.log("ok")
    }
}

// exercice 4 : crée une table de multiplication, où l'utilisateur devra choisir un multiplicateur et cela créera une table de multiplication (par exemple dans une fenetre pop up)

let btnMultiplication = document.getElementById("btnMultiplication");
let btnClear = document.getElementById("clearMultiplication")
let resultMultiplication = document.getElementById("resultMultiplication");

btnMultiplication.addEventListener("click", () => {

    resultMultiplication.innerHTML = "";
    let nbMultiplicateur = document.getElementById("nbMultiplicateur").value;
    let nb = Number(nbMultiplicateur);
    nbMultiplicateur.innerHTML = "";
    if (nbMultiplicateur == "") {
        resultMultiplication.innerHTML = "<p>Tu dois rentrer un nombre</p>"
    } else {
        for (let i = 1; i <= 10; i++) {
            let inner = `<p>${nb} x ${i} = ${nb * i}</p>`
            resultMultiplication.innerHTML += inner;
        }
    }
})

btnClear.addEventListener("click", () => {
    document.getElementById("nbMultiplicateur").value = "";
    resultMultiplication.innerHTML = "";
})

// exercice 5 : crée une pyramide à 10 étages grace à une boucle



function pyramide(input) {
    let resultPyramide = document.getElementById("resultPyramide");
    let height = 10;
    resultPyramide.innerHTML = "";
    // for (let i = 1; i <= height; i++) {
    //   let spaces = " ".repeat(height - i);
    //   let symbole = input.repeat(2 * i - 1);
    //   console.log(spaces + symbole);
    // }

    for (let i = 1; i <= height; i++) {
        let line = "";
        for (let u = 1; u <= height - i; u++) {
            line += "_";
        }
        for (let s = 1; s <= 2 * i - 1; s++) {
            line += input

        }
        line += "<br>"
        resultPyramide.innerHTML += line
    }

}



let btnPyramide = document.getElementById("btnPyramide");

btnPyramide.addEventListener("click", () => {
    let inputPyramide = document.getElementById("inputPyramide").value;

    pyramide(inputPyramide);
})

// exercice 6 : crée une fonction qui prend 2 nombre en parametre et renvoie un tableau de multiple de num jusqu'a la longueur definie

const btnMultiply = document.getElementById("btnMultiply");
let resultMultiply = document.getElementById("multiplyResult");
let clearMultiply = document.getElementById("clearMultiply");




function multiplyXlongueur(nb, long) {
    let line = "";
    for (let i = 1; i <= long; i++) {
        line += `${nb} x ${i} = ${nb * i} <br>`
    }
    console.log(line)
    resultMultiply.innerHTML = line;
}

btnMultiply.addEventListener("click", () => {
    let number = document.getElementById("multiplicateur");
    let longueur = document.getElementById("longueur");
    number = Number(number.value);
    longueur = Number(longueur.value);
    multiplyXlongueur(number, longueur)
    number.value = null;
    longueur.value = "";

})

clearMultiply.addEventListener("click", () => {
    resultMultiply.innerHTML = "";
})

// exercice 7 : crée un tableau de fruits (par ex: fraise, melon, raisin). Puis 1/ supprimer raisin, 2/ ajouter "Mandarine" à la fin du tableau, 3/ supprimer melon, et 4/ ajouter orange au debut du tableau

const questions = [
    {
        question: "1. Comment supprimer le raisin ?",
        reponses: ["A. fruits.pop(raisin)", "B. fruits.splice(2, 1) ", "C. fruits.shift(raisin)", "D. fruits.remove(raisin)"],
        answerTrueIndex: 1
    },
    {
        question: "2. Comment ajouter Mandarine à la fin du tableau ?",
        reponses: ["A. fruits.push(Mandarine)", "B. fruits.unshift(Mandarine)", "C. fruits.addLast(Mandarine)", "D. fruits.insert(3, Mandarine)"],
        answerTrueIndex: 0
    },
    {
        question: "3. Comment supprimer le Melon ?",
        reponses: ["A. fruits.splice(1, 1)", "B. fruits.delete(Melon)", "C. fruits.pop()", "D. fruits.removeAt(1)"],
        answerTrueIndex: 0
    },
    {
        question: "4. Comment ajouter Orange au début du tableau ?",
        reponses: ["A. fruits.unshift(Orange)", "B. fruits.pushAtStart(Orange)", "C. fruits.insert(0, Orange)", "D. fruits.prepend(Orange)"],
        answerTrueIndex: 0
    }
]



let containerQuestion = document.getElementById("question");
let reponse = document.querySelectorAll(".reponse");
let label = document.querySelectorAll(".label");
let btnReponse = document.getElementById("btnReponse");
let currentQuestionIndex = 0;

if (currentQuestionIndex === 0) afficherQuestion(currentQuestionIndex)

const EstBonneReponse = function (reponse, vraiReponse) {
    if (reponse == vraiReponse) {
        console.log("GAGNER");
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            afficherQuestion(currentQuestionIndex)
        } else {
            console.log("fin de partie")
        }
    } else {
        console.log("PERDU");
    };
};
const resetReponse = () => reponse.forEach(element => {
    element.checked = false;
});


function afficherQuestion(index) {
    containerQuestion.innerHTML = questions[index].question;
    for (let i = 0; i < 4; i++) {
        reponse[i].value = i;
        label[i].innerHTML = questions[index].reponses[i];
    };
};

btnReponse.addEventListener("click", () => {
    let userResponse = "";
    reponse.forEach(element => {
        if (element.checked == true) {
            userResponse = element.value;
        }
    });
    console.log(userResponse)
    console.log(questions[currentQuestionIndex].answerTrueIndex)
    EstBonneReponse(userResponse, questions[currentQuestionIndex].answerTrueIndex)
});


// let fruits = ["Fraise", "Melon", "Raisin"];
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("Mandarine");
// console.log(fruits);
// fruits.splice(1, 1);
// console.log(fruits);
// fruits.unshift("Orange");
// console.log(fruits);