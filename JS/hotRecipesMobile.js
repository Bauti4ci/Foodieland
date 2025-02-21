const startSection = document.querySelector('#mobileStart');

const noPhoto = 'Imagenes/noPhoto/noPhoto.png'

const jsonhotRecipes = JSON.parse(sessionStorage.getItem('hotRecipes'));

if (jsonhotRecipes) {
    const hotRecipesArray = jsonhotRecipes.map(recipe => {
        return (
            `<div class="mobileStart" id="${recipe.id}">
                <div class="startImgDiv">
                    <img src="${recipe.image ? recipe.image : noPhoto}" alt="Pollo" class="mobileStartImg">
                    <img src="Imagenes/start/Badge.png" alt="" class="mobileBadge">
                </div>
                <h1 class="homeTranslate">${recipe.title}</h1>
                <p class="startContext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste
                    laboriosam consequatur
                    pariatur error obcaecati placeat unde nihil facilis!</p>
                <div class="mobileDetails mobileS">
                    <span>
                        <img src="Svg/icons/timer.svg" alt="" class="mobileIcons">
                        <p>${recipe.readyInMinutes} Minutes</p>
                    </span>
                    <span>
                        <img src="Svg/icons/forknife.svg" alt="" class="mobileIcons">
                        <p>${recipe.type}</p>
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
                    <a href="RecipeDetails.html?id=${recipe.id}"> <button class="btn">
                        <p>View recipe</p> <img src="Svg/icons/play.svg" alt="">
                    </button>
                    </a>
                </div>

            </div>`
        )
    })

    startSection.innerHTML = hotRecipesArray.join(' ');
} else {
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=178a79a57ae64393823744c2e5e76fa5')
        .then(response => response.json())
        .then(recipes => {
            const hotRecipesArray = recipes.recipes.map(recipe => (
                `<div class="mobileStart" id="${recipe.id}">
                <div class="startImgDiv">
                    <img src="${recipe.image ? recipe.image : noPhoto}" alt="Pollo" class="mobileStartImg">
                    <img src="Imagenes/start/Badge.png" alt="" class="mobileBadge">
                </div>
                <h1 class="homeTranslate">${recipe.title}</h1>
                <p class="startContext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste
                    laboriosam consequatur
                    pariatur error obcaecati placeat unde nihil facilis!</p>
                <div class="mobileDetails mobileS">
                    <span>
                        <img src="Svg/icons/timer.svg" alt="" class="mobileIcons">
                        <p>${recipe.readyInMinutes} Minutes</p>
                    </span>
                    <span>
                        <img src="Svg/icons/forknife.svg" alt="" class="mobileIcons">
                        <p>${recipe.type}</p>
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
                    <a href="RecipeDetails.html?id=${recipe.id}"> <button class="btn">
                        <p>View recipies</p> <img src="Svg/icons/play.svg" alt="">
                    </button>
                    </a>
                </div>

            </div>`


            ));

            startSection.innerHTML = hotRecipesArray.join(' ');

            sessionStorage.setItem('hotRecipes', JSON.stringify(recipes.recipes))


        })

        .catch(error => {
            console.error('Error: ', error);

            startSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
        });
}