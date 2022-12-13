// step 1: select elements
const navIconDiv = document.querySelector(".nav__icon");
const sidebarAside = document.querySelector(".sidebar");

// step 2: handle event
const handleToggleMenu = () => {
  navIconDiv.classList.toggle("open");
  sidebarAside.classList.toggle("open");
};

// step 3: register event
navIconDiv.addEventListener("click", handleToggleMenu);
