const pageName = window.location.pathname.split("/").pop();

// HEADER
const header           = document.querySelector("#header");
const navbar           = document.querySelector("#navbar");
const btnIconHeader    = document.querySelectorAll(".btn-icon-header")
const content          = document.querySelector("#content");
let showSidebar        = false;


function toggleSidebar() {
    const logo = document.querySelector("#logo");
    showSidebar = !showSidebar;
    
    if (showSidebar) {
        navbar.style.marginLeft = "-10vw";
        navbar.style.animation = "showSidebar 0.5s";
        content.style.filter = "blur(2px)";
        logo.style.filter = "invert(1) blur(2px)";
    } else {
        navbar.style.marginLeft = "-100vw";
        navbar.style.animation = "hideSidebar 0.5s";
        content.style.filter = "";
        logo.style.filter = "invert(1)";
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

// PAGINAS
if (pageName === "home.html") {
    const navActive = document.querySelector("#home-nav")
    navActive.classList.add("active")
    // HOME
    
} else if (pageName.includes("voting")) {
    const navActive = document.querySelector("#voting-nav")
    navActive.classList.add("active")

    // VOTAÇÃO DEFAULT
    function cloneParticipants() {
        const names = [
            "Miguel Migliorelli Bringhenti",
            "Maysa Hellen Sacht Aragão",
            "Miguel Força Mariani",
        ];
        
        for (var i = 0; i < 3; i++) {
            let original = document.querySelector(".participant-card");
            let clone = original.cloneNode(true);
            let destino = document.querySelector(".voting-area");
            
            clone.style.display = "inline-block";
            clone.querySelector("#vote-button").value = i;
            clone.querySelector("#name").innerHTML = names[i];
            destino.appendChild(clone);
        }
    }
    cloneParticipants()
    
    const form_votacao = document.forms["voting-form"];
    const vote_spans   = document.querySelectorAll("#radio-label span");
    
    form_votacao.addEventListener("submit", function (event) {
        let data = new FormData(form_votacao);
        let output
        for (const entry of data) {
            output = `${entry[1]}\r`;
        }
        alert(output);
        
        event.preventDefault();
    });
    
    
    vote_spans.forEach(function (item) {
        item.addEventListener("click", function (e) {
            vote_spans.forEach(function (unslect) {
                unslect.innerHTML = "SELECIONAR ";
            });
            
            this.innerHTML = "SELECIONADO ✔";
        });
    });
    
} else if (pageName === "sponsors.html") {
    const navActive = document.querySelector("#sponsors-nav")
    navActive.classList.add("active")
    // PATROCINADORES
} else if (pageName === "socialmedia.html") {
    const navActive = document.querySelector("#socialmedia-nav")
    navActive.classList.add("active")
    // REDES SOCIAIS
    const instagramButton = document.querySelector(".instagram-button div")

    instagramButton.addEventListener("click", function () {
        this.textContent = "Seguindo ✔"
    })
} else if (pageName === "credits.html") {
    const navActive = document.querySelector("#credits-nav")
    navActive.classList.add("active")
}


