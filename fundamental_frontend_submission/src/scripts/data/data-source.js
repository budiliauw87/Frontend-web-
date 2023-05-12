class DataSource {
    static getMenuList() {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                  } else {
                    return Promise.reject('Something Error, Please Try again.');
                  }
            }).catch(e=>{
                return Promise.reject('Something Error, Please Try again.');
            });
    }

    static searchMeals(query) {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+query)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                  } else {
                    return Promise.reject('Something Error, Please Try again.');
                  }
            }).catch(e=>{
                return Promise.reject('Something Error, Please Try again.');
            });
    }

    static getMeal(idMeal) {
        return fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                  } else {
                    return Promise.reject('Something Error, Please Try again.');
                  }
            }).catch(e=>{
                return Promise.reject('Something Error, Please Try again.');
            });
    }
}

export default DataSource;