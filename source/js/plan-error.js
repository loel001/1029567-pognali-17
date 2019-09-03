var formPlan = document.querySelector(".add-plan__filter");
var action = document.querySelectorAll(".plan__text");
var letter = document.querySelectorAll(".plan__error");

if (formPlan) {
  formPlan.addEventListener("submit", function(evt) {
    if (!action[0].value) {
      evt.preventDefault();
      action[0].classList.add("plan__text--error");
      letter[0].classList.add("plan__error--open");
    }
    if (!action[1].value) {
      evt.preventDefault();
      action[1].classList.add("plan__text--error");
      letter[1].classList.add("plan__error--open");
    }
  });
}
