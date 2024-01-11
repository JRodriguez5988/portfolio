const sections = document.querySelectorAll(".section");
const navBtns = document.querySelectorAll(".navBtns");
const navBtn = document.querySelectorAll(".navBtn");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
    //Button click active class
    for (let i=0; i<navBtn.length; i++) {
        navBtn[i].addEventListener("click", (event) => {
            document.querySelector(".active-btn").classList.remove("active-btn");
            event.target.classList.add("active-btn");
        })
    }

    //sections active 
    allSections.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        if (id) {
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });
            
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}

pageTransitions();