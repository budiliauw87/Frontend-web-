import '../component/drawer/nav-drawer';
import '../component/appbar/app-bar';
import '../component/meal/meal-item';
import DataSource from '../data/data-source.js';

const detail = () => {
    const btnOpenDrawer = document.querySelector('#menuDrawer');
    const btnCloseDrawer = document.querySelector('#btn-close-drawer');
    const navDrawer = document.querySelector('nav-drawer');
    const mealElement = document.querySelector('meal-item');
    

    const onDrawerClicked = (e) => {
        e.preventDefault();
        const isOpen = navDrawer.className ? '':'open';
        console.log(isOpen);
        navDrawer.className = isOpen;
    };

    btnOpenDrawer.addEventListener('click',onDrawerClicked);
    btnCloseDrawer.addEventListener('click',onDrawerClicked);
    const parameterList = new URLSearchParams(window.location.search);

    async function getDetailMeal() {
        try {
            const idMeal = parameterList.get('id');
            const response = await DataSource.getMeal(idMeal);
            mealElement.meal(response);
        } catch (error) {
            mealElement.renderError(error);
            console.log(error);
        }
    }
    getDetailMeal();
};

export default detail;