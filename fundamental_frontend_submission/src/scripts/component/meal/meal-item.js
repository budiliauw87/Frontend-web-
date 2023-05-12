class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    meal(meal) {
        this._meal = meal;
        console.log(this._meal);
        this.render();
    }
    render() {
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
            font-size: 1.5em;
        }
        .card-body{
            padding:10px;
        }
        .card p{
            color: rgb(138, 136, 136);
        }
        .card .descreption{
            margin:16px auto;
            color: rgb(82, 81, 81);
            font-size: 1.2em;
        }
         
        .card img{
            max-height: 500px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }`;
        const cardElemen = document.createElement('div');
        const meal = this._meal[0];
        cardElemen.classList.add("card");
        cardElemen.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100%">
        <div class="card-body">
          <h3 class="card-title">${meal.strMeal}</h3>
          <p>${meal.strCategory}</p>
          <p class="descreption">${meal.strInstructions}</p>
        </div>`;
        this.shadowDOM.appendChild(cardElemen);

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

customElements.define('meal-item', MealItem);