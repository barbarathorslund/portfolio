const slides = document.querySelectorAll(".carousel__item");
const navBullets = document.querySelectorAll(".carousel__bullet");
const imageSliderPreviousButton = document.querySelector(
  ".carousel__arrow-button#previous"
);
const imageSliderNextButton = document.querySelector(
  ".carousel__arrow-button#next"
);
let currentSlide = 0;

function changeSlide(changeTo) {
  // Handle operations outside of image index
  if (changeTo < 0) {
    changeTo = slides.length - 1;
  }
  if (changeTo >= slides.length) {
    changeTo = 0;
  }

  slides[currentSlide].classList.toggle("active");
  slides[changeTo].classList.toggle("active");
  navBullets[currentSlide].classList.toggle("active");
  navBullets[changeTo].classList.toggle("active");

  currentSlide = changeTo;
}

// setInterval(() => {
//   changeSlide(currentSlide + 1);
// }, 10000);

imageSliderPreviousButton.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

imageSliderNextButton.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

navBullets.forEach((navBullet, index) => {
  navBullet.addEventListener("click", () => {
    changeSlide(index);
  });
});
