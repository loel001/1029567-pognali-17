var header = document.querySelector(".page-header");
var colorGamburger = document.querySelector(".page-header__icon");
var headerGamburger = document.querySelector(".page-header__toggle-open");
var logo = document.querySelector(".page-header__hide");
var logNew = document.querySelector(".page-header__picture");

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 125) {
    header.classList.add("page-header--scroll");
    headerGamburger.classList.add("page-header__toggle-open--scroll");
    colorGamburger.classList.add("page-header__icon--scroll");
    logo.classList.add("page-header__hide--scroll");
    logNew.classList.add("page-header__picture--scroll");
    document.body.style.paddingTop = header.scrollHeight + 'px';
  } else {
    header.classList.remove("page-header--scroll");
    headerGamburger.classList.remove("page-header__toggle-open--scroll");
    colorGamburger.classList.remove("page-header__icon--scroll");
    logo.classList.remove("page-header__hide--scroll");
    logNew.classList.remove("page-header__picture--scroll");
    document.body.style.paddingTop = 0;
  }
});
