var header = document.querySelector(".page-header");
var headerHamburger = document.querySelector(".page-header__toggle-open");
var logo = document.querySelector(".page-header__hide");
var logNew = document.querySelector(".page-header__picture");
var linkHeader = document.querySelectorAll(".navigation__link");
var wrap = document.querySelector(".page-header__color");
var listHeader = document.querySelector(".page-header__list");
var course = document.querySelector(".page-header__wrapper--course");

window.addEventListener('scroll', function () {
  if (window.pageYOffset >= 125) {
    header.classList.add("page-header--scroll");
    if (headerHamburger) {
      headerHamburger.classList.add("page-header__toggle-open--scroll");
    }
    logo.classList.add("page-header__hide--scroll");
    logNew.classList.add("page-header__picture--scroll");
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
    document.body.style.paddingTop = header.scrollHeight + 'px';
  } else {
    header.classList.remove("page-header--scroll");
    if (headerHamburger) {
      headerHamburger.classList.remove("page-header__toggle-open--scroll");
    }
    logo.classList.remove("page-header__hide--scroll");
    logNew.classList.remove("page-header__picture--scroll");
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
    document.body.style.paddingTop = 0;
  }
});
