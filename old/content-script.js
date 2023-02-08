const header = document.getElementById("header");
const navigationHeader = document.getElementById("navigation-header");
const form_votacao = document.forms["form-votacao"];
const navbars = document.querySelectorAll(".navigation-header a");
const content = document.querySelector(".content");
const botaoSeguir = document.querySelector("#seguir")
const instagramButton = document.querySelector(".instagram-button div")
let showSidebar = false;

function toggleSidebar() {
  const content = document.querySelector("#content");
  const logo = document.querySelector("#logo");
  showSidebar = !showSidebar;

  if (showSidebar) {
    navigationHeader.style.marginLeft = "-10vw";
    navigationHeader.style.animation = "showSidebar 0.5s";
    content.style.filter = "blur(2px)";
    logo.style.filter = "invert(1) blur(2px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animation = "hideSidebar 0.5s";
    content.style.filter = "";
    logo.style.filter = "invert(1)";
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});

function cloneParticipants() {
  const names = [
    "Miguel Migliorelli Bringhenti",
    "Maysa Hellen Sacht Aragão",
    "Miguel Força Mariani",
  ];

  for (var i = 0; i < 3; i++) {
    let original = document.querySelector(".participant-box");
    let clone = original.cloneNode(true);
    let destino = document.querySelector(".participants");

    clone.style.display = "inline-block";
    clone.querySelector("#vote-button").value = i;
    clone.querySelector("#name").innerHTML = names[i];
    destino.appendChild(clone);
  }
}
cloneParticipants();

form_votacao.addEventListener("submit", function (event) {
  let data = new FormData(form_votacao);
  let output
  for (const entry of data) {
    output = `${entry[1]}\r`;
  }
  alert(output);

  event.preventDefault();
});

content.addEventListener("focus", function () {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});

navbars.forEach(function (item) {
  item.addEventListener("click", function () {
    if (showSidebar) {
      showSidebar = true
      toggleSidebar();
    }

    let classe = this.getAttribute("class");

    if (classe != "active") {
      navbars.forEach(function (navitem) {
        classe = navitem.getAttribute("class");
        if (classe === "active") {
          navitem.classList.replace(classe, "unactive");
        }
      });
    }

    this.classList.replace("unactive", "active");
  });
});

const vote_spans = document.querySelectorAll("#radio-label span");
vote_spans.forEach(function (item) {
  item.addEventListener("click", function (e) {
    vote_spans.forEach(function (unslect) {
      unslect.innerHTML = "SELECIONAR ";
    });

    this.innerHTML = "SELECIONADO ✔";
  });
});

instagramButton.addEventListener("click", function () {
  this.textContent = "Seguindo ✔"
})

window.addEventListener("scroll", function () {
  const voteHeight     = document.querySelector("#voting-section").clientHeight 
  const sponsorsHeight = document.querySelector("#sponsors-section").clientHeight + voteHeight
  const socialHeight   = document.querySelector("#socialmedia-section").clientHeight + sponsorsHeight
  const creditsHeight  = document.querySelector("#credits-section").clientHeight + socialHeight
  const windowScroll   = document.documentElement.scrollTop
  let navItem

  if (windowScroll < voteHeight) {
    navItem = document.querySelector("#voting-nav")
  } else if (windowScroll > voteHeight && windowScroll < sponsorsHeight) {
    navItem = document.querySelector("#sponsors-nav")
  } else if (windowScroll > sponsorsHeight && windowScroll < socialHeight) {
    navItem = document.querySelector("#socialmedia-nav")
  } else if (windowScroll > socialHeight && windowScroll < creditsHeight) {
    navItem = document.querySelector("#credits-nav")
  }

  if (navItem.getAttribute("class") != "active") {
    navbars.forEach(function (navitem) {
      let classe = navitem.getAttribute("class");
      if (classe === "active") {
        navitem.classList.replace(classe, "unactive")
      }
    });
  }

  navItem.classList.replace("unactive", "active");
  
});

