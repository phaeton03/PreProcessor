const arrows = document.querySelectorAll(".slider__arrow__btn");
const leftArrow = arrows[0];
const rightArrow = arrows[1];
const menu = document.querySelector(".slider__list");
const liElements = Array.from(menu.children);

let currentArrowLiElement = 0;

rightArrow.onclick = function(domElement) {
  if (!(domElement instanceof HTMLElement)) {
    throw new Error("domElement is not HTML");
  }

  liElements.at(currentArrowLiElement).classList.toggle("header__nav--open");
  liElements.at(currentArrowLiElement).classList.toggle("header__nav--close");

  currentArrowLiElement++;
  currentArrowLiElement = currentArrowLiElement % liElements.length;

  liElements.at(currentArrowLiElement).classList.toggle("header__nav--close");
  liElements.at(currentArrowLiElement).classList.toggle("header__nav--open");
};

leftArrow.onclick = function() {
  liElements.at(currentArrowLiElement).classList.toggle("header__nav--open");
  liElements.at(currentArrowLiElement).classList.toggle("header__nav--close");

  currentArrowLiElement--;
  currentArrowLiElement = currentArrowLiElement % liElements.length;

  liElements.at(currentArrowLiElement).classList.toggle("header__nav--close");
  liElements.at(currentArrowLiElement).classList.toggle("header__nav--open");
};


