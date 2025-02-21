import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const otherRecipesSection = document.querySelector('.otherRecipesGrid');

const noPhoto = 'Imagenes/noPhoto/noPhoto.png'

const jsonOtherRecipes = JSON.parse(sessionStorage.getItem('otherRecipes'));

if (jsonOtherRecipes) {
    const otherRecipesArrayArticles = jsonOtherRecipes.map(
        recipe => {

            return (
                `<a href="RecipeDetails.html?id=${recipe.id}" class= "otherRecipesBox recipes">
                <img src="${recipe.image ? recipe.image : noPhoto}" alt="" class="dailyImg">
                <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="dailySaves heart">
                <p class="otherRecipeName">${recipe.title}</p>
                <div class="dailyDetails">
                    <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">
                        <p>${recipe.readyInMinutes} Minutes</p>
                    </span>
                    <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">
                        <p>${recipe.dishTypes[0]}</p>
                        </span>
                </div>
            </a>`
            )
        })
    otherRecipesSection.innerHTML = otherRecipesArrayArticles.join(' ');


    jsonOtherRecipes.forEach(recipe => {
        const favBtn = document.getElementById(recipe.id)
        evalFavorites(recipe.id)
        favBtn.addEventListener('click', (event) => {
            toggleFavorites(recipe.id)
            event.preventDefault()
        })
    });

} else {

    fetch('https://api.spoonacular.com/recipes/random?number=8&apiKey=178a79a57ae64393823744c2e5e76fa5')
        .then(response => response.json())
        .then(recipes => {
            const otherRecipesArrayArticles = recipes.recipes.map(recipe => (
                `<a href="RecipeDetails.html?id=${recipe.id}" class= "otherRecipesBox recipes">
                <img src="${recipe.image ? recipe.image : noPhoto}" alt="" class="dailyImg">
                <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="dailySaves heart">
                <p class="otherRecipeName">${recipe.title}</p>
                <div class="dailyDetails">
                    <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">
                        <p>${recipe.readyInMinutes} Minutes</p>
                    </span>
                    <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">
                        <p>${recipe.dishTypes[0]}</p>
                        </span>
                </div>
            </a>`
            ));
            otherRecipesSection.innerHTML = otherRecipesArrayArticles.join(' ');

            sessionStorage.setItem('otherRecipes', JSON.stringify(recipes.recipes))

            return recipes
        })

        .then(recipes => {
            recipes.recipes.forEach(recipe => {
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


}
