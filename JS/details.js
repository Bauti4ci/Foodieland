import { toggleFavorites } from "./favorites.js";
import { evalFavorites } from "./favorites.js";

const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');
const principal = document.querySelector('.principal')
const secondary = document.querySelector('.secondary')
const otherRecipesInSection = document.querySelector('.otherRecipesInSection')
const noPhoto = 'Imagenes/noPhoto/noPhoto.png'

const jsonOtherRecipesInDetails = JSON.parse(sessionStorage.getItem('otherRecipesInDetails'));

const jsonOtherRecipesInSection = JSON.parse(sessionStorage.getItem('otherRecipesInSection'));


fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=178a79a57ae64393823744c2e5e76fa5`)
    .then(response => response.json())
    .then(recipe => {

        principal.innerHTML = `
        <section class="header">
            <div class="title">
                <h1>${recipe.title}</h1>
                <div class="details">
                    <div class="author hide">
                        <img src="Imagenes/start/fotoJohnSmith.png" alt="">
                        <div class="authorName">
                            <p class="name">John Smith</p>
                            <p class="date">15 March 2022</p>
                        </div>
                    </div>
                    <div class="detailsRight">
                        <span class="dividers hide"></span>
                        <div class="detail">
                            <img src="Svg/icons/timer.svg" alt="" class="icons">
                            <div class="detailContext">
                                <p class="timeType">PREP TIME</p>
                                <p class="time">${recipe.preparationMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/timer.svg" alt="" class="icons">
                            <div class="detailContext">
                                <p class="timeType">COCK TIME</p>
                                <p class="time">${recipe.cookingMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/forknife.svg" alt="" class="icons">
                            <p class="foodType">${recipe.dishTypes[0]}</p>
                        </div>


                    </div>
                </div>
            </div>
            <div class="options">
                <div class="author hidden">
                    <img src="Imagenes/start/fotoJohnSmith.png" alt="">
                    <div class="authorName">
                        <p class="name">John Smith</p>
                        <p class="date">15 March 2022</p>
                    </div>
                </div>
                <div class="buttons">
                    <span class="interaction">
                        <button class="optionsBtn">
                            <img src="Imagenes/header/Group 900.png" alt="">
                        </button>
                        <p>PRINT</p>
                    </span>
                    <span class="interaction">
                        <button class="optionsBtn">
                            <img src="Imagenes/header/Group 901.png" alt="">
                        </button>
                        <p>SHARE</p>
                    </span>
                </div>
            </div>
        </section>
        </section>

        <section class="recipePincipal">
            <div class="principalHeader">
                <div class="recipeVid">
                    <img src="${recipe.image}" alt="" class="recipeVidImg">
                    <img src="Imagenes/recipeDetailsPage/Group 884.png" alt="" class="recipeVidIcon">
                </div>
                <div class="nutrition">
                    <div class="nutritionBox">
                        <h2>Nutrition Information</h2>
                        <span class="nutData">
                            <p class="nutDataType">Calories</p>
                            <p class="nutDataValue">${recipe.nutrition.nutrients.filter((value, index, array) => {
            return value.name == 'Calories'
        })[0].amount} kcal </p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Total Fat</p>
                            <p class="nutDataValue">${recipe.nutrition.nutrients.filter((value, index, array) => {
            return value.name == 'Fat'
        })[0].amount} g </p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Proteins</p>
                            <p class="nutDataValue">${recipe.nutrition.nutrients.filter((value, index, array) => {
            return value.name == 'Protein'
        })[0].amount} g </p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Carbohydrates</p>
                            <p class="nutDataValue">${recipe.nutrition.nutrients.filter((value, index, array) => {
            return value.name == 'Carbohydrates'
        })[0].amount} g</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Cholesterol</p>
                            <p class="nutDataValue">${recipe.nutrition.nutrients.filter((value, index, array) => {
            return value.name == 'Cholesterol'
        })[0].amount} mg</p>
                        </span>
                        <hr
                    </div>
                </div>
            </div>
            <p class="principalDescription">${recipe.summary}</p>
        </section>


        <section class="ingredients">
            <div class="list">
                <h3>Ingredients</h3>
                <div class="ing">
                    <p>For main dish</p>
                    <ul class"ingridientsList">
                        ${recipe.extendedIngredients.map(ingredient => {
            return `<span>
                <input type="checkbox" name="" id="check" class="check">
                <label for="check">${ingredient.original}</label>
                </span>
                <hr>`
        }).join('')}

                    </ul>
                </div>
            </div>
            <div class="otherRecipesInDetails">
                <div class"otherRecipesInSection">
                    <article class="miniRecipes">
                        <img src="Imagenes/recipies/meatballs.png" alt="">
                        <span>
                            <p class="miniRecipesName">Chicken Meatball with Creamy Chees...</p>
                            <p class="miniRecipesAuthor">By Andreas Paula</p>
                        </span>
                    </article>
                    <article class="miniRecipes">
                        <img src="Imagenes/recipies/pasta.png" alt="">
                        <span>
                            <p class="miniRecipesName">The Creamiest Creamy Chicken an...</p>
                            <p class="miniRecipesAuthor">By Andreas Paula</p>
                        </span>
                    </article>
                    <article class="miniRecipes">
                        <img src="Imagenes/recipies/chickenRice.png" alt="">
                        <span>
                            <p class="miniRecipesName">The Best Easy One Pot Chicken and Rice</p>
                            <p class="miniRecipesAuthor">By Andreas Paula</p>
                        </span>
                    </article>
                </div>
                <img src="Imagenes/recipies/Ads.png" alt="" class="ads">
            </div>
        </section>`
    })

    .catch(error => {
        console.error('Error: ', error);

        principal.innerHTML = '<p class"error">Hubo un error al cargar las recipes, recargue la página</p>';
    });


if (jsonOtherRecipesInDetails) {
    const otherRecipesArrayArticles = jsonOtherRecipesInDetails.map(
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

    secondary.innerHTML = otherRecipesArrayArticles.join(' ');

    jsonOtherRecipesInDetails.forEach(recipe => {
        const favBtn = document.getElementById(recipe.id)
        evalFavorites(recipe.id)
        favBtn.addEventListener('click', (event) => {
            toggleFavorites(recipe.id)
            event.preventDefault()
        })
    });
} else {
    fetch('https://api.spoonacular.com/recipes/random?number=4&apiKey=178a79a57ae64393823744c2e5e76fa5')
        .then(response => response.json())
        .then(recipes => {
            const otherRecipesArrayArticles = recipes.recipes.map(recipe => (
                `<a href="RecipeDetails.html?id=${recipe.id}" class= "otherRecipesBox recipes">
                <img src="${recipe.image}" alt="" class="dailyImg">
                <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="dailySaves heart">
                <p class="otherRecipeName">${recipe.title}</p>
                <div class="dailyDetails">
                    <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">
                        <p>${recipe.readyInMinutes} Minutes</p>
                    </span>
                </div>
            </a>`
            ));
            secondary.innerHTML = otherRecipesArrayArticles.join(' ');

            sessionStorage.setItem('otherRecipesInDetails', JSON.stringify(recipes.recipes))


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
            secondary.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
        });
}





if (jsonOtherRecipesInSection) {
    const otherRecipesArrayArticlesInSection = jsonOtherRecipesInSection.map(
        recipe => {

            return (
                `<a href="RecipeDetails.html?id=${recipe.id}" class="miniRecipes">
                        <img src="${recipe.image ? recipe.image : noPhoto}" alt="">
                        <span>
                            <p class="miniRecipesName">${recipe.name}</p>
                            <p class="miniRecipesAuthor">By Andreas Paula</p>
                        </span>
                    </a>`
            )
        })

    otherRecipesInSection.innerHTML = otherRecipesArrayArticlesInSection.join(' ');

} else {
    fetch('https://api.spoonacular.com/recipes/random?number=3&apiKey=178a79a57ae64393823744c2e5e76fa5')
        .then(response => response.json())
        .then(recipes => {
            const otherRecipesArrayArticlesInSection = recipes.recipes.map(recipe => (
                `<a href="RecipeDetails.html?id=${recipe.id}" class="miniRecipes">
                        <img src="${recipe.image ? recipe.image : noPhoto}" alt="">
                        <span>
                            <p class="miniRecipesName">${recipe.name}</p>
                            <p class="miniRecipesAuthor">By Andreas Paula</p>
                        </span>
                    </a>`
            ));
            otherRecipesInSection.innerHTML = otherRecipesArrayArticlesInSection.join(' ');

            sessionStorage.setItem('otherRecipesInSection', JSON.stringify(recipes.recipes))


            return recipes
        })

        .catch(error => {
            console.error('Error: ', error);
            secondary.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
        });
}