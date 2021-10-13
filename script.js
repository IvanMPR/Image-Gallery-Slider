'use-strict';

const images = document.querySelectorAll('.slide');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const dotsContainer = document.querySelector('.dots-container');

data = {
  currentSlide: 0,
  maxSlide: images.length - 1,
};

function goToSlide(slide) {
  images.forEach(
    (img, i) => (img.style.transform = `translateX(${100 * (i - slide)}%`)
  );
}
goToSlide(0);

function createDots() {
  images.forEach((image, i) => {
    const html = `<span class="dot" data-image="${i}"></span>`;
    dotsContainer.insertAdjacentHTML('beforeend', html);
  });
}
createDots();

function activateDot(currSlide) {
  document
    .querySelectorAll('.dot')
    .forEach(dot => dot.classList.remove('dot-active'));
  document
    .querySelector(`.dot[data-image="${currSlide}"]`)
    .classList.add('dot-active');
}
activateDot(0);

function moveRight() {
  if (data.currentSlide === data.maxSlide) {
    data.currentSlide = 0;
  } else {
    data.currentSlide++;
  }
  activateDot(data.currentSlide);
  goToSlide(data.currentSlide);
}

function moveLeft() {
  if (data.currentSlide === 0) {
    data.currentSlide = data.maxSlide;
  } else {
    data.currentSlide--;
  }
  activateDot(data.currentSlide);
  goToSlide(data.currentSlide);
}

window.addEventListener('keyup', e => {
  if (e.key !== 'ArrowRight') moveRight();
});

window.addEventListener('keyup', e => {
  if (e.key !== 'ArrowLeft') moveLeft();
});

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
