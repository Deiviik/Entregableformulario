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

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    document.getElementById("formMsg").textContent = "¡Gracias por contactarnos!";
    this.reset();
  } else {
    document.getElementById("formMsg").textContent = "Por favor, completa todos los campos.";
    document.getElementById("formMsg").style.color = "red";
  }
});
