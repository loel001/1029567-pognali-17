var menu = document.querySelector(".main-nav");
var hamburger = document.querySelector(".page-header__toggle-open");
var menuClose = document.querySelector(".main-nav__close");

if (menu) {
  menu.classList.add("main-nav--show");
  hamburger.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("main-nav--show");
    menu.classList.add("main-nav--open");
    menuClose.classList.add("main-nav__close--show");
  });

  if (menuClose) {
    menuClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      menu.classList.add("main-nav--show");
      menu.classList.remove("main-nav--open");
      menuClose.classList.remove("main-nav__close--show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (menu.classList.contains("main-nav--open")) {
        evt.preventDefault();
        menu.classList.add("main-nav--show");
        menu.classList.remove("main-nav--open");
        menuClose.classList.remove("main-nav__close--show");
      }
    }
  });
}
