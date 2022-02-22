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
