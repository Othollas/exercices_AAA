    document.querySelectorAll(".link").forEach(element =>{
        if(element.children[0].textContent == document.title){
            element.classList.add("currentPage")
        }
    });