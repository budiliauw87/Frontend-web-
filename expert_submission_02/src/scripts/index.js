import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from '../scripts/views/app';
const app = new App({
    button: document.querySelector('.nav-toggler'),
    drawer: document.querySelector('.navigation'),
    content: document.querySelector('body'),
});

