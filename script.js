let vouchers = ["1234", "4321", "ABCD", "DCBA", "1234ABCD"];
let form     = document.forms["voucher-form"];

function clearError() {
  let error = document.querySelector(".error");
  error.classList.remove("display-error");
}

function showError(errorElement, errorMessage) {
  const error = document.querySelector("." + errorElement)

  error.style.transform = "translateY(0px)"
  error.style.opacity = ".7"
  error.style.animation = "voucherError .7s ease-in-out;"
  error.classList.add("display-error");
  error.innerHTML = errorMessage;

}

form.onsubmit = function (event) {
  clearError();
  if (form.voucher.value === "") {
    showError(
      "voucher-error",
      "Você precisa colocar um voucher para acessar o painel de votos."
    );
    return false;
  } else if (!vouchers.includes(form.voucher.value)) {
    showError("voucher-error", "Voucher inválido.");
    return false;
  } else {
    window.location.href = "site/home.html";
  }
  event.preventDefault();
};

