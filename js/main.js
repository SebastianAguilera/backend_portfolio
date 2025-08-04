document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const sections = document.querySelectorAll(".section");
  const toggleButton = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-section");

      sections.forEach((section) => section.classList.remove("active"));
      document.getElementById(target).classList.add("active");

      // Si está en móvil, cerrar menú al hacer clic
      sidebar.classList.remove("open");
    });
  });

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});
