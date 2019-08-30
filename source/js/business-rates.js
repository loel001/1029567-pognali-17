var businessLink = document.querySelector(".profile__button");
var businessPopup = document.querySelector(".modal");
var businessClose = businessPopup.querySelector(".modal__close");

businessLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  businessPopup.classList.add("modal--open");
});

businessClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  businessPopup.classList.remove("modal--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (businessPopup.classList.contains("modal--open")) {
      evt.preventDefault();
      businessPopup.classList.remove("modal--open");
    }
  }
});
