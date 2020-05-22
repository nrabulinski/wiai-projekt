(function() {
    const navbar = document.querySelector(".nav");
    const sections = document.querySelectorAll("section");
    const navitems = document.querySelectorAll(".nav > a");
    function computeNavbar() {
        if(window.scrollY > 5)
            navbar.classList.add("nav-scrolled");
        else
            navbar.classList.remove("nav-scrolled");

        let closest = [...sections].map(e => ({
            dist: window.scrollY - e.offsetTop,
            id: e.id
        })).sort((a, b) => Math.abs(a.dist) - Math.abs(b.dist))[0];

        closest = closest.dist >= -100 ? closest : {};

        [...navitems].forEach(e =>
            e.hash.substr(1) == closest.id
            ? e.classList.add("nav-selected")
            : e.classList.remove("nav-selected"));
    }
    computeNavbar();
    window.addEventListener("scroll", computeNavbar);
})()