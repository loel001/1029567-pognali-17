var header = document.querySelector(".page-header");
var headerHamburger = document.querySelector(".page-header__toggle-open");
var logo = document.querySelector(".page-header__hide");
var logNew = document.querySelector(".page-header__picture");
var linkHeader = document.querySelectorAll(".navigation__link");
var wrap = document.querySelector(".page-header__color");
var listHeader = document.querySelector(".page-header__list");
var course = document.querySelector(".page-header__wrapper--course");
var topOfHeader = header.offsetHeight;
var bodyMain = document.querySelector(".main");
var bodyScroll = document.querySelector(".scroll");

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= topOfHeader) {
    if (bodyMain) {
      bodyMain.classList.add("main--show");
    }
    if (bodyScroll) {
      bodyScroll.classList.add("scroll--show");
    }
    if (header) {
      header.classList.add("page-header--scroll");
    }
    if (headerHamburger) {
      headerHamburger.classList.add("page-header__toggle-open--scroll");
    }
    if (logo) {
      logo.classList.add("page-header__hide--scroll");
    }
    if (logNew) {
      logNew.classList.add("page-header__picture--scroll");
    }
    for (var i=0; i<linkHeader.length; i++) {
      linkHeader[i].classList.add("navigation__link--scroll");
    }
    if (wrap) {
      wrap.classList.add("page-header__color--scroll");
    }
    if (listHeader) {
      listHeader.classList.add("page-header__list--scroll");
    }
    if (course) {
      course.classList.remove("page-header__wrapper--course");
    }
  } else {
    if (bodyMain) {
      bodyMain.classList.remove("main--show");
    }
    if (bodyScroll) {
      bodyScroll.classList.remove("scroll--show");
    }
    if (header) {
      header.classList.remove("page-header--scroll");
    }
    if (headerHamburger) {
      headerHamburger.classList.remove("page-header__toggle-open--scroll");
    }
    if (logo) {
      logo.classList.remove("page-header__hide--scroll");
    }
    if (logNew) {
      logNew.classList.remove("page-header__picture--scroll");
    }
    for (var i=0; i<linkHeader.length; i++) {
      linkHeader[i].classList.remove("navigation__link--scroll");
    }
    if (wrap) {
      wrap.classList.remove("page-header__color--scroll");
    }
    if(listHeader) {
      listHeader.classList.remove("page-header__list--scroll");
    }
    if (course) {
      course.classList.add("page-header__wrapper--course");
    }
  }
});
