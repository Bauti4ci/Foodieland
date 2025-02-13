import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const otherRecipesSection = document.querySelector('.otherRecipesGrid');

fetch('JSONS/otherRecipes.json')
    .then(response => response.json())
    .then(otherRecipes => {
        const otherRecipesArrayArticles = otherRecipes.map(recipe => (
            `<a href="RecipeDetails.html?id=${recipe.id}" class= "otherRecipesBox recipes">
                <img src="${recipe.image}" alt="" class="dailyImg">
                <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="dailySaves heart">
                <p class="otherRecipeName">${recipe.title}</p>
                <div class="dailyDetails">
                    <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">
                        <p>${recipe.cookingMinutes}</p>
                    </span>
                    <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">
                        <p>${recipe.type}</p>
                        </span>
                </div>
            </a>`
        ));
        otherRecipesSection.innerHTML = otherRecipesArrayArticles.join(' ');
        return otherRecipes
    })

    .then(otherRecipes => {
        otherRecipes.forEach(recipe => {
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

        otherRecipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });
