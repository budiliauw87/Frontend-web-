import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from '../scripts/views/app';
import swRegister from './utils/sw-register';
const app = new App({
  button: document.querySelector('.nav-toggler'),
  drawer: document.querySelector('.navigation'),
  content: document.querySelector('main'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
