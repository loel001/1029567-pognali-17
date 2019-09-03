var newMap = document.querySelector(".address__map");
var closeMap = document.querySelector(".address__image");
var wrapMap = document.querySelector(".address__wrapper");

if (wrapMap) {
  wrapMap.classList.add("address__wrapper--show");
}
if (closeMap) {
  closeMap.classList.add("address__image--close");
}
if (newMap) {
  newMap.classList.add("address__map--open");
}
