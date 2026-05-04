/* ================================
   MENU HAMBÚRGUER
   Controla a abertura e fechamento do menu mobile
================================ */

// Seleciona o botão do menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");

// Seleciona a lista de links do menu
const navMenu = document.getElementById("nav-menu");

// Seleciona todos os links dentro do menu
const navLinks = document.querySelectorAll(".nav-menu a");

// Ao clicar no botão hambúrguer, abre ou fecha o menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Ao clicar em qualquer link do menu, fecha o menu
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});