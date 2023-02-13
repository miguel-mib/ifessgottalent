const header           = document.querySelector("#header");
const navbar           = document.querySelector("#navbar");
const btnIconHeader    = document.querySelectorAll(".btn-icon-header")
const content          = document.querySelector("#content");
const blurBackground   = document.querySelector(".header-blur-bg");
let showSidebar        = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    
    if (showSidebar) {
        navbar.style.marginLeft = "-10vw";
        navbar.style.animation = "showSidebar 0.3s ease-in-out";
        content.style.filter = "blur(2px)";
        blurBackground.style.display = "block"
    } else {
        navbar.style.marginLeft = "-100vw";
        navbar.style.animation = "hideSidebar 0.3s ease-in-out";
        content.style.filter = "";
        blurBackground.style.display = "none"
    }
}

btnIconHeader.forEach(function(e){
    e.addEventListener("click", function(){
        toggleSidebar()
    })
})

blurBackground.addEventListener("click", function () {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});