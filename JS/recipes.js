import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const recipesSection = document.querySelector('.recipesGrid');

fetch('JSONS/Recipes.json')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(recipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const recipesArrayArticles = recipes.map(recipe => (
            `<a href="RecipeDetails.html?id=${recipe.id}" class="recipesBox recipes" id="">
                    <img src="${recipe.image}" alt="" class="gridPhoto">
                    <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="saves heart">
                    <p class="recipeName">${recipe.title}</p>
                    <div class="recipesDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="recipesIcons">
                            <p>${recipe.cookingMinutes}</p>
                        </span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="recipesIcons">
                            <p>${recipe.type}</p>
                        </span>
                    </div>
                </a>`
        ));

        /* Agregamos la foto en la posicion que queramos */
        recipesArrayArticles.splice(5, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');

        /* Agregamos el array (en formato string) de recipes dentro de la section */
        recipesSection.innerHTML = recipesArrayArticles.join(' ');

        return recipes

    })

    .then(recipes => {

        /* Recipes es el array de recetas */
        /* Podemos ir una por una y buscar la imagen del <3 de cada una segun el id */
        /* Una vez tenemos la img podemos agregarle el eventListener  */
        recipes.forEach(recipe => {
            const favBtn = document.getElementById(recipe.id)
            evalFavorites(recipe.id)
            favBtn.addEventListener('click', () => toggleFavorites(recipe.id))
        });



    })

    /* Se ejecuta en caso de error */
    .catch(error => {
        console.error('Error: ', error);

        /* En caso de error mostramos un mensaje en la section */
        recipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });
