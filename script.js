"use strict";

const btnOpenMenu = document.querySelector(".btn--show-menu");
const btnCloseMenu = document.querySelector(".btn--close-menu");

const containerNavMenu = document.querySelector(".nav__menu-container");
const containersSubMenu = document.querySelectorAll("nav__submenu-container");

const navLinks = document.querySelector(".nav__links");
const overlay = document.querySelector(".overlay");

btnCloseMenu.addEventListener("click", function () {
  containerNavMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnOpenMenu.addEventListener("click", function () {
  containerNavMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Closing and opening submenus

const btnsOpenSubLink = document.querySelectorAll(".nav__icon--arrow");

btnsOpenSubLink.forEach(btn => {
  btn.addEventListener("click", function () {
    console.log(btn.parentElement);
    btn.parentElement.classList.toggle("nav__submenu-container--collapsed");
  });
});

/*

To Fix:
  1) [FIXED] If menu is not open on mobile view, menu doesn't show on desktop view
  2) [FIXED] Adjust sensitivity on clicking menu tabs
    2a) Revisit 'bubbling' to add listener to menu instead of individual buttons
  3) [FIXED] Sub-links need to be links (currently just a list of regular text)
  4) Correct style of icon arrows on menu items when arrow flips

*/
