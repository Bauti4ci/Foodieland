import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const otherRecipesSection = document.querySelector('.otherRecipesGrid');

fetch('JSONS/otherRecipes.json')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(otherRecipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const otherRecipesArrayArticles = otherRecipes.map(recipe => (
            `<article class= "otherRecipesBox recipes">
                <img src="${recipe.image}" alt="" class="dailyImg">
                <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="dailySaves heart">
                <a href="RecipeDetails.html">${recipe.title}</a>
                <div class="dailyDetails">
                    <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">
                        <p>${recipe.cookTime}</p>
                    </span>
                    <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">
                        <p>${recipe.type}</p>
                        </span>
                </div>
            </article>`

        ));

        /* Agregamos el array (en formato string) de recipes dentro de la section */
        otherRecipesSection.innerHTML = otherRecipesArrayArticles.join(' ');

        return otherRecipes

    })

    .then(otherRecipes => {

        /* Recipes es el array de recetas */
        /* Podemos ir una por una y buscar la imagen del <3 de cada una segun el id */
        /* Una vez tenemos la img podemos agregarle el eventListener  */
        otherRecipes.forEach(recipe => {
            const favBtn = document.getElementById(recipe.id)
            evalFavorites(recipe.id)
            favBtn.addEventListener('click', () => toggleFavorites(recipe.id))
        });



    })

    /* Se ejecuta en caso de error */
    .catch(error => {
        console.error('Error: ', error);

        /* En caso de error mostramos un mensaje en la section */
        otherRecipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });
