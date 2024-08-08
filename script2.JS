document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  let currentIndex = 0;

  function showSlide(index) {
      if (index >= totalSlides) currentIndex = 0;
      else if (index < 0) currentIndex = totalSlides - 1;
      else currentIndex = index;

      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener('click', function() {
      showSlide(currentIndex + 1);
  });

  prevButton.addEventListener('click', function() {
      showSlide(currentIndex - 1);
  });

  showSlide(currentIndex); // Initialize carousel
});