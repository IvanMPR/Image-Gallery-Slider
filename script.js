'use-strict';

const images = document.querySelectorAll('.slide');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const dotsContainer = document.querySelector('.dots-container');

data = {
  currentImage: 0,
  threshold: images.length - 1,
};

function goToImage(imageNum) {
  images.forEach(
    (img, i) => (img.style.transform = `translateX(${100 * (i - imageNum)}%`)
  );
}
goToImage(0);

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
  if (data.currentImage === data.threshold) {
    data.currentImage = 0;
  } else {
    data.currentImage++;
  }

  activateDot(data.currentImage);
  goToImage(data.currentImage);
}

function moveLeft() {
  if (data.currentImage === 0) {
    data.currentImage = data.threshold;
  } else {
    data.currentImage--;
  }

  activateDot(data.currentImage);
  goToImage(data.currentImage);
}

window.addEventListener('keyup', e => {
  if (e.key === 'ArrowRight') moveRight();
});

window.addEventListener('keyup', e => {
  if (e.key === 'ArrowLeft') moveLeft();
});

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dot')) return;
  const imgNumber = e.target.dataset.image;
  data.currentImage = Number(imgNumber);
  activateDot(imgNumber);
  goToImage(imgNumber);
});
