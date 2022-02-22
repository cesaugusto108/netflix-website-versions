"use strict";

const nav = document.querySelector("nav");

function navChange() {
      if (scrollY > 1344) {
            nav.style.backgroundColor = "#000";
      } else {
            nav.style.backgroundColor = "transparent";
      }
}

window.addEventListener("scroll", navChange);
