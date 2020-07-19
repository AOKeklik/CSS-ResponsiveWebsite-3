//Selectors
    let header = document.querySelector(".header");
    let hamburgerMenu = document.querySelector(".hamburger-menu");

// scroll
    window.addEventListener("scroll",function(){
        let windowPosition = window.scrollY > 0;
        header.classList.toggle("active",windowPosition)//true -CALSTR- false -KAPAT-
    });

// menu
    hamburgerMenu.addEventListener("click",function(){
        header.classList.toggle("menu-open"); 
    });