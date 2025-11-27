let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Show the first slide initially
showSlide(slideIndex);

// Show specific slide
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
  });
}

// Next / Previous controls
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Event listeners
prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));
