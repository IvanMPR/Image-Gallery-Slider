'use-strict';

const images = document.querySelectorAll('.slide');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

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

function moveRight() {
  if (data.currentSlide === data.maxSlide) {
    data.currentSlide = 0;
  } else {
    data.currentSlide++;
  }
  goToSlide(data.currentSlide);
}

function moveLeft() {
  if (data.currentSlide === 0) {
    data.currentSlide = data.maxSlide;
  } else {
    data.currentSlide--;
  }
  goToSlide(data.currentSlide);
}

window.addEventListener('keyup', e => {
  if (e.key !== 'ArrowRight') return;
  moveRight();
});

window.addEventListener('keyup', e => {
  if (e.key !== 'ArrowLeft') return;
  moveLeft();
});

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
