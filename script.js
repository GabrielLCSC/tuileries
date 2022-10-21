window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    
    if (window.pageYOffset > 0) {
    navbar.classList.add("light");
    } else {
    navbar.classList.remove("light");
    }
});

window.addEventListener("scroll", function() {
    let elements = document.getElementById("elements");
    
    if (window.pageYOffset > 0) {
    elements.classList.add("is-scroll");
    } else {
    elements.classList.remove("is-scroll");
    }
});
