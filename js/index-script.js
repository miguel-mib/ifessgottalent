let vouchers = ["1234", "4321", "ABCD", "DCBA"];
let form = document.forms["voucher-form"];

function clearError() {
  let error = document.querySelector(".error");
  error.classList.remove("display-error");
}

function showError(errorElement, errorMessage) {
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
}

form.onsubmit = function (event) {
  clearError();
  if (form.voucher.value === "allanchad") {
    var audio = new Audio("anticrias/anticrias.mp3");
    audio.play();
    showError("voucher-error", "ANTICRIA DETECTADO");
    return false;
  } else if (form.voucher.value === "") {
    showError(
      "voucher-error",
      "Você precisa colocar um voucher para acessar o painel de votos."
    );
    return false;
  } else if (!vouchers.includes(form.voucher.value)) {
    showError("voucher-error", "Voucher inválido.");
    return false;
  } else {
    window.location.href = "content/vote.html";
  }
  event.preventDefault();
};