'use strict';

const slider = document.querySelector('.carousel');
const sliderItem = [...slider.querySelectorAll('.carousel__item')];
const dots = [...document.querySelectorAll('.carousel__dot')];
const sliderElement = slider.querySelector('.carousel__item');
const count = slider.childElementCount;

const nextButton = document.querySelector('.carousel__btn_next');
const prevButton = document.querySelector('.carousel__btn_prev');

const slideSize = sliderElement.offsetWidth;
const margin = parseInt(getComputedStyle(sliderElement).marginRight);
let number = 0;

function moveSlider(element) {
  const shift = (slideSize + margin) * number;

  element.style.transform = `translateX(${-shift}px)`;
  dots[number].classList.add('carousel__dot_active');
}

nextButton.addEventListener('click', () => {
  dots[number].classList.remove('carousel__dot_active');

  if (number === count - 1) {
    number = -1;
  }

  number++;
  sliderItem.forEach(moveSlider);
});

prevButton.addEventListener('click', () => {
  dots[number].classList.remove('carousel__dot_active');

  if (!number) {
    number = count;
  }

  number--;
  sliderItem.forEach(moveSlider);
});
