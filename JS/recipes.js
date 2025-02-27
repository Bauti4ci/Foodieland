import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const recipesSection = document.querySelector('.recipesGrid');

const noPhoto = 'Imagenes/noPhoto/noPhoto.jpg'

const jsonrecipes = JSON.parse(sessionStorage.getItem('recipes'));

if (jsonrecipes) {
    const recipesArrayArticles = jsonrecipes.map(recipe => {

        return (
            `<a href="RecipeDetails.html?id=${recipe.id}" class="recipesBox recipes" id="">
                    <img src="${recipe.image ? recipe.image : noPhoto}" alt="" class="gridPhoto">
                    <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="saves heart">
                    <p class="recipeName">${recipe.title}</p>
                    <div class="recipesDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="recipesIcons">
                            <p>${recipe.readyInMinutes} Minutes</p>
                        </span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="recipesIcons">
                            <p>${recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                </a>`
        )
    })

    recipesArrayArticles.splice(5, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');

    recipesSection.innerHTML = recipesArrayArticles.join(' ');

    jsonrecipes.forEach(recipe => {
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
            const recipesArrayArticles = recipes.recipes.map(recipe => (
                `<a href="RecipeDetails.html?id=${recipe.id}" class="recipesBox recipes" id="" style="background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);">
                    <img src="${recipe.image ? recipe.image : noPhoto}" alt="" class="gridPhoto">
                    <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="saves heart">
                    <p class="recipeName">${recipe.title}</p>
                    <div class="recipesDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="recipesIcons">
                            <p>${recipe.readyInMinutes} Minutes</p>
                        </span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="recipesIcons">
                            <p>${recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                </a>`
            ));
            recipesArrayArticles.splice(5, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');
            recipesSection.innerHTML = recipesArrayArticles.join(' ');

            sessionStorage.setItem('recipes', JSON.stringify(recipes.recipes))

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
            recipesSection.innerHTML = '<div class="errorContainer"><p class="error">There was an error loading the recipes, <br> please reload the page <img src="Svg/Error/error.svg" alt="" class="errorX"></p></div>';
        });

}

