// Funcion para el menu mobile
function desplegar() {
    document.getElementById("menu").classList.toggle("ver");
    document.getElementById("menu_screen").classList.toggle("ver_menu_screen");
    document.getElementById("body").classList.toggle("block_overflow");
}

// Funcion para el menu desktop
function desplegarDesktop() {
  document.getElementById("productos-sm").classList.toggle("ver_menu_desktop");
}

// Funcion para el menu de usuario en dekstop
function desplegarPerfil() {
  document.getElementById("perfil-desktop").classList.toggle("ver_perfil_desktop")
}

// Slider
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar de imagen cada 3 segundos
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);
