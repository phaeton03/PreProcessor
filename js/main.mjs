import "../sass/blocks/nav.scss";
import "../sass/blocks/header.scss";
import "../sass/blocks/content.scss";
import "../sass/blocks/btn.scss";
import "../sass/blocks/footer.scss";
import "../sass/blocks/image.scss";
import "../sass/blocks/slider.scss";
import "../sass/blocks/arrow.scss";
import "../sass/blocks/position.scss";
import "../sass/global/main.scss";


const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");

burger.onclick = function() {
  menu.classList.toggle("header__nav--close");
  menu.classList.toggle("header__nav--open");
};

