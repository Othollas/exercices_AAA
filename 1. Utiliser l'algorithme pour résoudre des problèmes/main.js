    let icone = document.querySelector(".icone");
    let form = document.querySelector(".hidden");
    let butonSubmit = document.querySelector(".ageSubmit");

    icone.addEventListener("click", () => {
        form.classList.toggle("hidden");
    })

    butonSubmit.addEventListener("click", (e)=>{
        e.preventDefault();
        let age_major = document.querySelector(".major");
        let age_minor = document.querySelector(".minor");
        let input = document.getElementById("input_age");
        let age = input.value;
        input.value = "";
        console.log(age)
        if(age>=18){
           age_major.classList.remove("hidden");
           setInterval(()=> age_major.classList.add("hidden"), 1000);
        } 
        if(age<18 && age>=1){
            age_minor.classList.remove("hidden");
            setInterval(()=> age_minor.classList.add("hidden"), 1000);
        }
    })

    // exercice 2 

    let chiffre_a_deviner = Math.floor(Math.random()*100);
    console.log(chiffre_a_deviner);
    let jouer = document.getElementById("jouer");
    let rejouer = document.getElementById("rejouer");
    let gagnant = document.getElementById("succes");
    let perdu = document.getElementById("perdu");
    let trop_bas = document.getElementById("bas");
    let trop_haut = document.getElementById("haut");
    let score = 3

    jouer.addEventListener("click", ()=>{
        let chiffre_utilisateur = document.getElementById("chiffre_utilisateur").value;
        trop_bas.classList.add("hidden");
        trop_haut.classList.add("hidden");
        rejouer.classList.add("hidden");
        
        console.log(chiffre_a_deviner)
        console.log(score)
        if(chiffre_a_deviner>chiffre_utilisateur  && score !=0){
            trop_bas.classList.remove("hidden");
            score-=1;
        }else if(chiffre_a_deviner<chiffre_utilisateur  && score !=0){
            trop_haut.classList.remove("hidden");
            score-=1;
        }else if(chiffre_a_deviner == chiffre_utilisateur){
            gagnant.classList.remove("hidden");
            jouer.disabled = true;
            rejouer.classList.remove("hidden");
        }else if(score === 0){
            perdu.classList.remove("hidden");
            rejouer.classList.remove("hidden");
        }
    })

    rejouer.addEventListener("click", ()=>{
        chiffre_a_deviner = Math.floor(Math.random()*100);
        rejouer.classList.add("hidden");
        perdu.classList.add("hidden");
        gagnant.classList.add("hidden");
        score = 3;
        jouer.disabled = false
    })