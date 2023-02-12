const header           = document.querySelector("#header");
const navbar           = document.querySelector("#navbar");
const btnIconHeader    = document.querySelectorAll(".btn-icon-header")
const content          = document.querySelector("#content");
let showSidebar        = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    
    if (showSidebar) {
        navbar.style.marginLeft = "-10vw";
        navbar.style.animation = "showSidebar 0.3s ease-in-out";
        content.style.filter = "blur(2px)";
    } else {
        navbar.style.marginLeft = "-100vw";
        navbar.style.animation = "hideSidebar 0.3s ease-in-out";
        content.style.filter = "";
    }
}

btnIconHeader.forEach(function(e){
    e.addEventListener("click", function(){
        toggleSidebar()
    })
})

content.addEventListener("focus", function () {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});