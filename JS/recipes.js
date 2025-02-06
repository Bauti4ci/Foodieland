const recipesSection = document.querySelector('.recipesGrid');

fetch('JSONS/Recipes.json')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(recipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const recipesArrayArticles = recipes.map(recipe => (
            `<article class="recipesBox recipes" id="${recipe.id}">
                    <img src="${recipe.image}" alt="" class="gridPhoto">
                    <img src="Svg/Guardados/nomarcado.svg" id="" alt="" class="saves heart">
                    <a href="RecipeDetails.html">${recipe.title}</a>
                    <div class="recipesDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="recipesIcons">
                            <p>${recipe.cookTime}</p>
                        </span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="recipesIcons">
                            <p>${recipe.type}</p>
                        </span>
                    </div>
                </article>`
        ));

        /* Agregamos la foto en la posicion que queramos */
        recipesArrayArticles.splice(4, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');

        /* Agregamos el array (en formato string) de recipes dentro de la section */
        recipesSection.innerHTML = recipesArrayArticles.join(' ');

        /*const recipes = document.querySelectorAll('.recipes'); */
        const saved = document.querySelectorAll('.heart');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (favorites.length === 0) {
            favorites = Array.from(recipes).map(() => 0);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            favorites.forEach((favorite, index) => {
                if (favorite === 1) {
                    recipes[index].classList.add('favorite');
                    saved[index].src = 'Svg/Guardados/marcado.svg';
                }
            });
        }

        function toggleFavorites(position) {
            const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

            savedFavorites[position] = savedFavorites[position] === 0 ? 1 : 0;

            localStorage.setItem('favorites', JSON.stringify(savedFavorites));

            if (savedFavorites[position] === 1) {
                recipes[position].classList.add('favorite');
                saved[position].src = 'Svg/Guardados/marcado.svg';
            } else {
                recipes[position].classList.remove('favorite');
                saved[position].src = 'Svg/Guardados/nomarcado.svg';
            }
        }

        saved.forEach((favBtn, index) => {
            favBtn.addEventListener('click', () => toggleFavorites(index));
        });


    })
    /* Se ejecuta en caso de error */
    .catch(error => {
        console.error('Error: ', error);

        /* En caso de error mostramos un mensaje en la section */
        recipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });
