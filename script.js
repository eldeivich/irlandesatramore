const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
const links = document.querySelectorAll(".nav-menu a");

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("is-open", !isOpen);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  });
});
