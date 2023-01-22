"use strict";
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navToggle = document.querySelector(".nav-links");

navToggleBtn.addEventListener("click", () => {
  navToggle.toggleAttribute("visible");
});
