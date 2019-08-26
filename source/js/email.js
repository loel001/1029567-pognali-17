var form = document.querySelector(".interest__registration");
var input = form.querySelector(".interest__email");
var email = form.querySelector("[name=email]");
var error = form.querySelector("[placeholder=E-mail]");


form.addEventListener("submit", function(evt) {
    if (!email.value)
    evt.preventDefault();
    error.placeholder = "Введите e-mail";
    input.classList.add("interest__email--error");
});
