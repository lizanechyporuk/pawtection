"use strict";

// btns
const morebtn = document.querySelector(".morebtn");
// containers
const morebtnContainer = document.querySelector(".savedPets-moreBtn-container");

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  } else {
    return "light";
  }
}

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "light_mode" : "dark_mode";
  buttonEl.setAttribute("aria-lavel", newCta);
  buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

// More button
morebtn.addEventListener("click", function () {
  grid2.style.display = "block";
  morebtnContainer.style.display = "none";

  imagesLoaded(grid2, function () {
    msnry2 = new Masonry(grid2, {
      itemSelector: ".grid-item--2",
      columnWidth: ".grid-sizer--2",
      gutter: ".gutter-sizer--2",
      horizontalOrder: true,
      percentPosition: true,
    });
  });
});

// Masonry
var grid = document.querySelector(".grid");
var msnry;
var grid2 = document.querySelector(".grid--2");
var msnry2;

imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
    percentPosition: true,
  });
});

let contactsBtn = document.querySelector(".contactsBtn");
let questionBtn = document.querySelector(".questionBtn");
let footer = document.querySelector(".footer-container");

// contactsBtn.addEventListener("click", function () {
//   footer.style.background = "var(--secondaryColor-bg-mainPage)";
// });

// questionBtn.addEventListener("click", function () {
//   footer.style.background = "var(--secondaryColor-bg-mainPage)";
// });

const sliding = function () {
  footer.classList.toggle("slide");
};

contactsBtn.addEventListener("click", sliding);
questionBtn.addEventListener("click", sliding);
