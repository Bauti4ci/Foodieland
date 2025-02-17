import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const recipesSection = document.querySelector('.recipesGrid');

fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=bd1332e762454289a96c401f256fed9f')
    .then(response => response.json())
    .then(recipes => {
        const recipesArrayArticles = Array(recipes).map(recipe => (
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
        recipesArrayArticles.splice(5, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');
        recipesSection.innerHTML = recipesArrayArticles.join(' ');
        return recipes
    })

    .then(recipes => {
        Array(recipes).forEach(recipe => {
            const favBtn = document.getElementById(recipe.id)
            evalFavorites(recipe.id)
            favBtn.addEventListener('click', (event) => {
                toggleFavorites(recipe.id)
                event.preventDefault()
            })
        });
    })

    .catch(error => {
        console.error('Error: ', error);
        recipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });
