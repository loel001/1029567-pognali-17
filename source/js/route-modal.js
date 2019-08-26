var countryLink = document.querySelector(".route__button--location");
var countryPopup = document.querySelector(".route__modal");
var countryClose = countryPopup.querySelector(".modal-country__button");

countryLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryPopup.classList.add("route__modal--open");
});

countryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryPopup.classList.remove("route__modal--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (countryPopup.classList.contains("route__modal--open")) {
      evt.preventDefault();
      countryPopup.classList.remove("route__modal--open");
    }
  }
});
