const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
burger.onclick = function() {
  menu.classList.toggle("header__nav--close");
};
