// VOTAÇÃO DEFAULT
function cloneParticipants() {
    const names = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I"
    ];
    
    for (var i = 0; i < 9; i++) {
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
