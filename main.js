const themeSwitcher = document.getElementById("theme-switcher");
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

function darkMode() {
  themeSwitcher.children[0].textContent = "Dark Mode";
  themeSwitcher.children[1].classList.replace("fa-sun", "fa-moon");
}

function lightMode() {
  themeSwitcher.children[0].textContent = "Light Mode";
  themeSwitcher.children[1].classList.replace("fa-moon", "fa-sun");
}

function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (!currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}

themeSwitcher.addEventListener("click", switchTheme);

const currentThemeFromLocalStorage = localStorage.getItem("theme");

if (currentThemeFromLocalStorage) {
  document.documentElement.setAttribute(
    "data-theme",
    currentThemeFromLocalStorage
  );
  if (currentThemeFromLocalStorage === "dark") {
    darkMode();
  } else {
    lightMode();
  }
}
