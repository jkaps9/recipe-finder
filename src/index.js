import "./styles.css";

const menu = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const maxPrepDropdown = document.querySelector("legend#max-prep-time");

maxPrepDropdown.addEventListener('click', () => {
  maxPrepDropdown.classList.toggle("active");
})
