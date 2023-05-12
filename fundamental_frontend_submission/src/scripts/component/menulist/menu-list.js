class MenuList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
    const dateTime = new Date();
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
    }
    .card{
        display: flex;
        flex-direction: column;
        width: auto;
        min-height: 100px;
        background-color: #fff;
        border-radius: 10px;
        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)!important;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .card-title{
        color: black;
        font-size: 1em;
    }
    .card-body{
        padding:10px;
    }
    .card p{
        color: rgb(138, 136, 136);
        font-size: 0.8em;
    }
    .card img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    </style>
    `;
    this._meals.forEach(item => {
      const linkItem = document.createElement('a');
      linkItem.setAttribute('href','detail.html?id='+item.idMeal);
      linkItem.innerHTML = `<div class="card">
                <img src="${item.strMealThumb}" alt="${item.strMeal}" style="width:100%">
                <div class="card-body">
                  <h3 class="card-title">${item.strMeal}</h3>
                  <p>${item.strCategory}</p>
                </div>
            </div>`;
      this.shadowDOM.appendChild(linkItem);
    });
  }
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('menu-list', MenuList);