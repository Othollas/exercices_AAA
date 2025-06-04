let btnHidden = document.querySelectorAll(".btnHidden");
console.log(btnHidden)
let containerHidden = document.querySelectorAll(".hidden");
btnHidden.forEach(bouton => bouton.addEventListener("click", () => {
    let nbtarget = bouton.dataset.target;
    console.log(nbtarget)
    containerHidden.forEach(container => {
        if (container.dataset.target == nbtarget) {
            container.classList.toggle("hidden")
        }
    });
}))

//exercice 1


class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.age} ans.`)
    }
}


new Personne("olivier", 29).sePresenter()

// exercice 2
class Personne2 {
    #age; // variable privée
    constructor(nom, age) {
        this.nom = nom;
        this.#age = age;
    }
    sePresenter() {
        console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.#age} ans.`);
    }
    afficheAge() {
        console.log(this.#age);
    }
    modifierAge(age) {
        this.#age = age;
    }
    vieillir() {
        this.#age++;
    }
}

const user1 = new Personne2("olivier", 29);

user1.afficheAge();
user1.modifierAge(40);
user1.vieillir();
user1.vieillir();
user1.vieillir();
user1.vieillir();
user1.afficheAge();

// exercice3

class Employee extends Personne {

    constructor(nom, age, poste) {
        super(nom, age);
        this.poste = poste;
        
    }
    sePresenter() {
        console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.age} ans et je suis ${this.poste}.`)
    }

}

const user2 = new Employee("olivier", 40, "developpeur")

user2.sePresenter()