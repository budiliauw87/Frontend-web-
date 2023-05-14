import './style.css';

class AppBar extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button href="#" class="nav-toggler" tabindex="2" aria-label="toggle drawer">
      <div class="toggle-line"></div>
      <div class="toggle-line"></div>
      <div class="toggle-line"></div>
    </button>
    <div class="brand">
      <h1>My Catalouge</h1>
    </div>
    <nav class="navigation">
      <ul>
        <li class="active"><a href="/">Home</a></li>
        <li><a href="#">Favorite</a></li>
        <li><a href="https://github.com/budiliauw87" target="_blank">About Us</a></li>
      </ul>
    </nav>`;
  }

}

customElements.define('app-bar', AppBar);