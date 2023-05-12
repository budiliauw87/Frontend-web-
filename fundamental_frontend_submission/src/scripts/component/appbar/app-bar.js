import './style.css';

class AppBar extends HTMLElement {


  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button type="button" id="menuDrawer"><i class="fa fa-bars"></i></button>
      <h3 class="brand">Restaurant App</h3>
      <form id="search-form">
        <i class="fa fa-search"></i>
        <input id="search-input" type="text" placeholder="Search..." name="query">
      </form>

      <ul class="navbar">
       <li class="nav-item">
        <a href="/" title="home" >Home</a>
       </li>
       <li class="nav-item">
        <a href="/" title="Favorite" >Favorite</a>
       </li>
       <li class="nav-item">
        <a href="https://budiliauw87.github.io/" title="budiliauw87" target="blank">About Us</a>
       </li>
      </ul>`;
  }

}

customElements.define('app-bar', AppBar);