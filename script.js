document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Hamburger menu toggle for mobile view
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarMenu = document.getElementById("menu");

  hamburgerMenu.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
  });
});
