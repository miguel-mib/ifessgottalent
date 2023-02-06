const header = document.getElementById("header");
const navigationHeader = document.getElementById("navigation-header");
const form_votacao = document.forms["form-votacao"];
const navbars = document.querySelectorAll(".navigation-header a");
const content = document.querySelector(".content");
const botaoSeguir = document.querySelector("#seguir")
const instagramButton = document.querySelector(".instagram-button div")
let showSidebar = false;

function toggleSidebar() {
  const content = document.getElementById("content");
  const logo = document.getElementById("logo");
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

form_votacao.onsubmit = function () {
  let data = new FormData(form_votacao);
  let output = "";
  for (const entry of data) {
    output = `${entry[1]}\r`;
  }
  alert(output);

  return false;
};

content.addEventListener("focus", function () {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});

navbars.forEach(function (item) {
  item.addEventListener("click", function () {
    if (showSidebar) {
      showSidebar = true;
      toggleSidebar();
    }
  });
});

navbars.forEach(function (item) {
  item.addEventListener("click", function () {
    let classe = this.getAttribute("class");
    console.log(classe);
    if (classe != "active") {
      navbars.forEach(function (navitem) {
        let classe = navitem.getAttribute("class");
        if (classe === "active") {
          navitem.classList.remove(classe);
        }
      });
    }
    this.classList.add("active");
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

window.onscroll = function () {
  const voteHeight     = document.querySelector("#vote-section").scrollHeight
  const sponsorsHeight = document.querySelector("#sponsors-section").scrollHeight
  const socialHeight   = document.querySelector("#socialmedia-section").scrollHeight
  const creditsHeight  = document.querySelector("#credits-section").scrollHeight
  const windowScroll   = [
    document.body.scrollTop,
    document.documentElement.scrollTop
  ] 

  windowScroll.forEach(function(window){
    if (window < sponsorsHeight) {
      console.log("vote")
    } else if (window > sponsorsHeight && window < socialHeight) {
      console.log("sponsors")
    } else if (window > socialHeight && window < creditsHeight) {
      console.log("social")
    } else if (window > creditsHeight) {
      console.log("credits")
    }
  })
};