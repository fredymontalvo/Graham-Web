const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
const logo = document.querySelector(".logo-herosection"); // Agrega esta línea para seleccionar el logo

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
  logo.classList.toggle("hide"); // Agrega o quita la clase para ocultar el logo
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
    logo.classList.toggle("hide"); // Asegúrate de ocultar el logo si se hace clic fuera del menú
  }
});
