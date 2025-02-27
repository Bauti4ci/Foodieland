const startSection = document.querySelector('#start');

const noPhoto = 'Imagenes/noPhoto/noPhoto.jpg'

const jsonhotRecipes = JSON.parse(sessionStorage.getItem('hotRecipes'));


if (jsonhotRecipes) {
    const hotRecipesArray = jsonhotRecipes.map(recipe => {
        return (
            `<article class="hiddenMobile start" id="${recipe.id}" style="background-image: url(${recipe.image ? recipe.image : noPhoto})">
                <div class="leftstart">
                    <span class="firstbtn">
                        <img src="Imagenes/start/pergamino.png" alt="">
                        <p>Hot Recipes</p>
                    </span>
                        <h1 class="homeTranslate">${recipe.title}</h1>
                    <p class="subH">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste laboriosam
                        consequatur
                        pariatur error obcaecati placeat unde nihil facilis!</p>
                    <div class="labels">
                        <span class="secondbtn">
                            <img src="Svg/icons/timer.svg" alt="">
                            <p>${recipe.readyInMinutes} Minutes</p>
                        </span>
                        <span class="secondbtn">
                            <img src="Svg/icons/forknife.svg" alt="">
                            <p>${recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                    <div class="startFooter">
                        <div class="author">
                            <img src="Imagenes/start/fotoJohnSmith.png" alt="">
                            <div class="authorName">
                                <p class="name">John Smith</p>
                                <p class="date">15 March 2022</p>
                            </div>
                        </div>
                        <a href="RecipeDetails.html?id=${recipe.id}">
                        <button class="btn">
                            <p>View recipies</p> <img src="Svg/icons/play.svg" alt="">
                        </button>
                        </a>
                    </div>
                    <img src="Imagenes/start/Badge.png" alt="" class="badge">
                </div>
            </article>`

        )
    })

    startSection.innerHTML = hotRecipesArray.join(' ');
} else {
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=178a79a57ae64393823744c2e5e76fadxs5')
        .then(response => response.json())
        .then(recipes => {
            const hotRecipesArray = recipes.recipes.map(recipe => (
                `<article class="hiddenMobile start" id="${recipe.id}" style="background-image: url(${recipe.image ? recipe.image : noPhoto})">
                <div class="leftstart">
                    <span class="firstbtn">
                        <img src="Imagenes/start/pergamino.png" alt="">
                        <p>Hot Recipes</p>
                    </span>
                        <h1 class="homeTranslate">${recipe.title}</h1>
                    <p class="subH">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste laboriosam
                        consequatur
                        pariatur error obcaecati placeat unde nihil facilis!</p>
                    <div class="labels">
                        <span class="secondbtn">
                            <img src="Svg/icons/timer.svg" alt="">
                            <p>${recipe.readyInMinutes} Minutes</p>
                        </span>
                        <span class="secondbtn">
                            <img src="Svg/icons/forknife.svg" alt="">
                            <p>${recipe.dishTypes[0]}</p>
                        </span>
                    </div>
                    <div class="startFooter">
                        <div class="author">
                            <img src="Imagenes/start/fotoJohnSmith.png" alt="">
                            <div class="authorName">
                                <p class="name">John Smith</p>
                                <p class="date">15 March 2022</p>
                            </div>
                        </div>
                        <a href="RecipeDetails.html?id=${recipe.id}">
                        <button class="btn">
                            <p>View recipe</p> <img src="Svg/icons/play.svg" alt="">
                        </button>
                        </a>
                    </div>
                    <img src="Imagenes/start/Badge.png" alt="" class="badge">
                </div>
            </article>`


            ));

            startSection.innerHTML = hotRecipesArray.join(' ');

            sessionStorage.setItem('hotRecipes', JSON.stringify(recipes.recipes))

        })

        .catch(error => {
            console.error('Error: ', error);

            startSection.innerHTML = '<div class="errorContainer"><p class="error">There was an error loading the recipes, <br> please reload the page <img src="Svg/Error/error.svg" alt="" class="errorX"></p></div>';
        });
}