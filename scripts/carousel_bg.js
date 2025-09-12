document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-bg");
  let current = 0;

  slides[current].classList.add("active");

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 5000);
});
