const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

// Mostrar el primero al cargar
mostrarSlide(index);

