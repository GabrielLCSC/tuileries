window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    
    if (window.pageYOffset > 0) {
    navbar.classList.add("light");
    } else {
    navbar.classList.remove("light");
    }
});