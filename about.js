let hamelem = document.getElementById("ham");
hamelem.addEventListener("click", toggleMenu);

function toggleMenu() {
    let mobileMenuElem = document.getElementById ("m-menu");
    mobileMenuElem.classList.toggle("show-menu");
    modileMenuElem.style.backgroundColor = "green";
}