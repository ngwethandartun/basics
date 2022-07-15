const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let imagePosition = 0;

document.querySelector(".prev-btn").addEventListener("click", moveToPrevSlide);
document.querySelector(".next-btn").addEventListener("click", moveToNextSlide);

function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}

function moveToPrevSlide() {
  hideAll();
  if (imagePosition === 0) {
    imagePosition = totalSlides - 1;
  } else {
    imagePosition--;
  }
  slides[imagePosition].classList.add("visible");
}

function moveToNextSlide() {
   hideAll()
  if (imagePosition === totalSlides - 1) {
    imagePosition = 0;
  } else {
    imagePosition++;
  }
  slides[imagePosition].classList.add("visible");
}
