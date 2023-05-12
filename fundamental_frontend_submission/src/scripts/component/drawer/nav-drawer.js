import './style.css';

class NavDrawer extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="mobile-header">
      <button id="btn-close-drawer" type="button"><i class="fa fa-close"></i></button>
    </div>
    <ul >
      <li> <a href="/" title="home" >Home</a></li>
      <li> <a href="#" title="Favorite" >Favorite</a></li>
      <li>
       <a href="https://budiliauw87.github.io/" title="budiliauw87" target="blank">About Us</a>
      </li>
     </ul>
    `;
  }

}

customElements.define('nav-drawer', NavDrawer);