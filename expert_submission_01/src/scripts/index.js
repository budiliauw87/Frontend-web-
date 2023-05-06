import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
//import "../styles/debug.css";
"use strict";
let navdrawer = document.querySelector(".nav-drawer");
let navItems = document.querySelectorAll('.nav-item');
let hambuger = document.querySelector(".nav-toggler");
let mainElement = document.querySelector("body");
hambuger.addEventListener('click', event => {
    navdrawer.classList.toggle('open');
    event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    navdrawer.classList.remove('open');
    event.stopPropagation();
});

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        let currentText = navItems[i].textContent;
        console.log(currentText);
        Array.from(navItems).map(el => {
            if (currentText != el.textContent) {
                el.classList.remove('active');
            } else if (currentText == el.textContent) {
                el.classList.toggle('active');
            }
        });
        navItems[i].classList.toggle("active");
    });
}