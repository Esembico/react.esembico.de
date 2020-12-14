document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".menu-toggle").forEach(function (element) {
    element.addEventListener("click", function(menuToggle) {
      menuToggle.target.classList.toggle("active");
      document.getElementById("main-menu").classList.toggle("active");
    });
  });
});