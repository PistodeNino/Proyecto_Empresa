window.addEventListener("scroll", function() {
    let topBar = document.querySelector(".top-bar");
    if (window.scrollY > 50) {
        topBar.classList.add("scrolled");
    } else {
        topBar.classList.remove("scrolled");
    }
});
