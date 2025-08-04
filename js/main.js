document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-section");

      // Oculta todas las secciones
      sections.forEach((section) => section.classList.remove("active"));

      // Muestra la sección correspondiente
      document.getElementById(target).classList.add("active");
    });
  });
});
