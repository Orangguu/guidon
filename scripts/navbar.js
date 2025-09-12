document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY >= header.offsetTop + header.offsetHeight) {
            navbar.classList.add("navbar-bg");
        } else {
            navbar.classList.remove("navbar-bg");
        }
    });
});