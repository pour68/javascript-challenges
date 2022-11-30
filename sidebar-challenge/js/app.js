const navIcon = document.querySelector(".nav__icon");
const sidebarDiv = document.querySelector(".sidebar");

navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open");
  sidebarDiv.classList.toggle("open");
});
