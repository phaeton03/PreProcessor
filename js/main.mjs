import "../sass/blocks/nav.scss";
import "../sass/blocks/header.scss";

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");

burger.onclick = function() {
  menu.classList.toggle("header__nav--close");
  menu.classList.toggle("header__nav--open");
};

