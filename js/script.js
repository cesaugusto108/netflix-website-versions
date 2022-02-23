"use strict";

// efeitos na navbar

const nav = document.querySelector(".navbar");

function navChange() {
      if (scrollY > 1344) {
            nav.style.backgroundColor = "#000";
      } else {
            nav.style.backgroundColor = "transparent";
      }
}

window.addEventListener("scroll", navChange);

// tamanho do input da classe form-control

const formInput1 = document.getElementById("form-control-lg1");
const formInput2 = document.getElementById("form-control-lg2");

function formInputChange() {
      if (window.visualViewport.width <= 600) {
            formInput1.classList.remove("form-control-lg");
            formInput2.classList.remove("form-control-lg");
      } else {
            formInput1.classList.add("form-control-lg");
            formInput1.classList.add("form-control-lg");
      }
}

formInputChange();

// modal

const login = document.getElementById("login");
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("login-modal-close");

function modalShow() {
      modal.style.display = "block";
      nav.style.display = "none";
}

function modalClose() {
      modal.style.display = "none";
      nav.style.display = "block";
}

login.addEventListener("click", modalShow);
modalCloseButton.addEventListener("click", modalClose);
window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") modalClose();
});

// efeito no footer

const footer = document.querySelector("footer");

function footerGradient() {
      if (scrollY > 2000) {
            footer.style.backgroundImage = "linear-gradient(to top, #b3050e, transparent, transparent)";
      } else {
            footer.style.backgroundImage = "linear-gradient(to top, #000, #000)";
      }
console.log(scrollY);
}

window.addEventListener('scroll', footerGradient);
