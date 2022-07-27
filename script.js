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

navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const subMenuContainer = e.target.parentElement;
  if (subMenuContainer.classList.contains("nav__submenu-container")) {
    // Check for click on arrow or features/company
    console.log("HAS SUBMENU");
    // Check if submenu is open
    subMenuContainer.classList.toggle("nav__submenu-container--collapsed");
  }
});
