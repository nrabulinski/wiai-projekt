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
        })).sort((a, b) => a.dist - b.dist)
            .find(a => a.dist >= -75);

        closest = closest || {};

        [...navitems].forEach(e =>
            e.hash.substr(1) == closest.id
            ? e.classList.add("nav-selected")
            : e.classList.remove("nav-selected"));
    }
    computeNavbar();
    window.addEventListener("scroll", computeNavbar);
})()
