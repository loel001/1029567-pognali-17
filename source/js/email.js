var form = document.querySelector(".interest__registration");
var email = document.querySelector(".interest__email");

if (form) {
  form.addEventListener("submit", function(evt) {
      if (!email.value) {
        evt.preventDefault();
        email.placeholder = "Введите e-mail";
        email.classList.add("interest__email--error");
      }
  });
}
