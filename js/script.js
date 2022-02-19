"use strict";

const nav = document.getElementById("nav");
const hamMenu = document.getElementById("ham-menu");
const bottomLayer = document.getElementById("bottom-layer");
const topLayer = document.getElementById("top-layer");
const gradient = document.getElementById("gradient");

function effects() {
      function hideNavbar() {
            if (scrollY > 114) {
                  nav.classList.add("active");
                  hamMenu.style.display = "block";
            } else {
                  nav.classList.remove("active");
                  hamMenu.style.display = "none";
            }
      }

      function bottomGradient() {
            console.log(scrollY);
            if (scrollY > 2348) {
                  gradient.style.backgroundImage = "linear-gradient(to top, rgba(223, 7, 18, 0.5), #000, #000)";
            } else {
                  gradient.style.backgroundImage = "linear-gradient(to top, #000, #000, #000)";
            }
      }

      hideNavbar();
      bottomGradient();
}

function showSideNavBar() {
      bottomLayer.style.display = "flex";
      topLayer.style.left = "360px";
}

window.addEventListener("scroll", effects);
hamMenu.addEventListener("click", showSideNavBar);
