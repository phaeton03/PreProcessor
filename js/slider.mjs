let currentArrowLiElement = 0;

const slider = document.querySelectorAll(".slider");
slider.forEach((domElement) => Slider(domElement));

function Slider(domElement) {
  if (!(domElement instanceof HTMLElement)) {
    throw new Error("domElement is not HTML");
  }

  const arrows = domElement.querySelectorAll(".slider__arrow__btn");
  const leftArrow = arrows[0];
  const rightArrow = arrows[1];
  const menu = domElement.querySelector(".slider__list");
  const liElements = Array.from(menu.children);

  leftArrow.onclick = function () {
    slideLeft(liElements);
  };

  rightArrow.onclick = function () {
    slideRight(liElements)
  };
}

function slideRight(liElements) {
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--open");
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--close");

  currentArrowLiElement++;
  currentArrowLiElement = currentArrowLiElement % liElements.length;

  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--close");
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--open");
}

function slideLeft(liElements) {
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--open");
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--close");

  currentArrowLiElement--;
  currentArrowLiElement = currentArrowLiElement % liElements.length;

  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--close");
  liElements.at(currentArrowLiElement).classList.toggle("slider__nav--open");
}


