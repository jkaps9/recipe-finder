import "./styles.css";

const menu = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
