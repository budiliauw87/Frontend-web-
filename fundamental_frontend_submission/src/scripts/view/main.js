
import '../component/drawer/nav-drawer';
import '../component/appbar/app-bar';
import '../component/menulist/menu-list';
import DataSource from '../data/data-source.js';

const main = () => {
    const btnOpenDrawer = document.querySelector('#menuDrawer');
    const btnCloseDrawer = document.querySelector('#btn-close-drawer');
    const menuListElement = document.querySelector('menu-list');
    const navDrawer = document.querySelector('nav-drawer');
    const searchForm = document.querySelector('#search-form');

    // toggle drawer
    const onDrawerClicked = (e) => {
        e.preventDefault();
        const isOpen = navDrawer.className ? '' : 'open';
        console.log(isOpen);
        navDrawer.className = isOpen;
    };
    //on search
    const onSearchMeal = (e)=>{
        e.preventDefault();
        const query = document.querySelector('#search-input').value;
        if(query!=''){
            searchMeal(query);
        }else{
            getMeals();
        }
        
    } 
    searchForm.addEventListener('submit',onSearchMeal);
    btnOpenDrawer.addEventListener('click', onDrawerClicked);
    btnCloseDrawer.addEventListener('click', onDrawerClicked);

    //get data meals
    async function getMeals() {
        try {
            const response = await DataSource.getMenuList();
            menuListElement.meals(response);
        } catch (error) {
            menuListElement.renderError(error);
            console.log(error);
        }
    }
    async function searchMeal(queryMeal) {
        try {
            const response = await DataSource.searchMeals(queryMeal);
            menuListElement.meals(response);
        } catch (error) {
            menuListElement.renderError(error);
            console.log(error);
        }
    }

    getMeals();
};

export default main;