const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
const links = document.querySelectorAll(".nav-menu a");
const todayLabel = document.querySelector("#today-label");
const todayHours = document.querySelector("#today-hours");
const kitchenHours = document.querySelector("#kitchen-hours");

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const weeklyHours = [
  { tavern: "17:00 - 00:30", kitchen: "Cocina de 19:30 a 23:00" },
  { tavern: "17:00 - 00:30", kitchen: "Cocina de 19:30 a 23:00" },
  { tavern: "17:00 - 00:30", kitchen: "Cocina de 19:30 a 23:00" },
  { tavern: "Cerrado", kitchen: "Cocina cerrada" },
  { tavern: "17:00 - 00:30", kitchen: "Cocina de 19:30 a 23:00" },
  { tavern: "17:00 - 02:00", kitchen: "Cocina de 19:30 a 23:30" },
  { tavern: "17:00 - 02:00", kitchen: "Cocina de 19:30 a 23:30" },
];

const updateTodayHours = () => {
  if (!todayLabel || !todayHours || !kitchenHours) {
    return;
  }

  const today = new Date().getDay();
  const hours = weeklyHours[today];

  todayLabel.textContent = dayNames[today];
  todayHours.textContent = hours.tavern;
  kitchenHours.textContent = hours.kitchen;
};

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

updateTodayHours();
setInterval(updateTodayHours, 60 * 60 * 1000);
