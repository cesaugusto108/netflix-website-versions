"use strict";

const nav = document.getElementById("nav");
const hamMenu = document.getElementById("ham-menu");
const loginButton = document.getElementById("login-button");
const loginListItem = document.getElementById("login-list-item");
const menuButton = document.getElementById("nav-menu-button");
const bottomLayer = document.getElementById("bottom-layer");
const topLayer = document.getElementById("top-layer");
const gradient = document.getElementById("gradient");
const sideClose = document.getElementById("side-close");
const joinInput = document.getElementById("join-input2");

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
            if (scrollY > 2348) {
                  gradient.style.backgroundImage = "linear-gradient(to top, rgba(223, 7, 18, 0.5), #000, #000)";
                  joinInput.style.border = "none";
            } else {
                  gradient.style.backgroundImage = "linear-gradient(to top, #000, #000, #000)";
                  joinInput.style.border = "1px solid #444";
            }
      }

      hideNavbar();
      bottomGradient();
}

function showSideNavBar() {
      bottomLayer.style.display = "flex";

      if (window.visualViewport.width < 360) {
            topLayer.style.left = "260px";
            topLayer.style.overflowY = "hidden";
            bottomLayer.style.width = "260px";
      } else {
            topLayer.style.left = "360px";
            topLayer.style.overflowY = "hidden";
            bottomLayer.style.width = "360px";
      }

      if (window.visualViewport.height <= 520) {
            topLayer.style.left = "660px";
            topLayer.style.overflowY = "hidden";
            bottomLayer.style.width = "660px";
      } else {
            topLayer.style.left = "360px";
            topLayer.style.overflowY = "hidden";
            bottomLayer.style.width = "360px";
      }

      hamMenu.style.opacity = "0";
      hamMenu.style.cursor = "default";
      nav.style.opacity = "0";
      nav.style.pointerEvents = "none";
}

function hideSideNavBar() {
      bottomLayer.style.display = "none";
      topLayer.style.left = "0";
      topLayer.style.overflowY = "visible";
      hamMenu.style.opacity = "1";
      hamMenu.style.cursor = "pointer";
      nav.style.opacity = "1";
      nav.style.pointerEvents = "all";
}

window.addEventListener("scroll", effects);
hamMenu.addEventListener("click", showSideNavBar);
loginButton.addEventListener("click", showSideNavBar);
loginListItem.addEventListener("click", showSideNavBar);
menuButton.addEventListener("click", showSideNavBar);
sideClose.addEventListener("click", hideSideNavBar);
