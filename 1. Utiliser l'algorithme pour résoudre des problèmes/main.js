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