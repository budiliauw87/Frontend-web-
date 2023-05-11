import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

'use strict';
const navdrawer = document.querySelector('.nav-drawer');
const navItems = document.querySelectorAll('.nav-item');
const hambuger = document.querySelector('.nav-toggler');
const mainElement = document.querySelector('body');
hambuger.addEventListener('click', (event) => {
    navdrawer.classList.toggle('open');
    event.stopPropagation();
});

// mainElement.addEventListener('click', event => {
//     navdrawer.classList.remove('open');
//     event.stopPropagation();
// });
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        let currentText = navItems[i].textContent;
        Array.from(navItems).map(el => {
            if (currentText != el.textContent) {
                el.classList.remove('active');
            } else if (currentText == el.textContent && !el.classList.contains('active')) {
                el.classList.toggle('active');
                console.log(el.textContent);
            }
        });
    });
}
let restaurantElement = '';
data.restaurants.forEach(resto => {
    restaurantElement += `
    <div class='catalog-item'>
        <img src='${resto.pictureId}' class='thumbnail' alt='${resto.name}'>
        <div class='city'>${resto.city}</div>
        <a href='#'><h2>${resto.name}</h2></a>
        <div class='rating'><p>Ratings ${resto.rating}</p></div>
        <div class='catalog-body'>
        <p>${resto.description}</p>
        </div>
    </div>
    `
});

document.querySelector('.wrapper-catalog').innerHTML = restaurantElement;




