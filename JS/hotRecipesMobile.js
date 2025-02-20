const startSection = document.querySelector('#mobileStart');

fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=3f804dd295df422e8f581d4324762e34')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(recipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const hotRecipesArray = recipes.recipes.map(recipe => (
            `<div class="mobileStart" id="${recipe.id}">
                <div class="startImgDiv">
                    <img src="${recipe.image}" alt="Pollo" class="mobileStartImg">
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

        /* Agregamos el array (en formato string) de recipes dentro de la section */
        startSection.innerHTML = hotRecipesArray.join(' ');

    })

    /* Se ejecuta en caso de error */
    .catch(error => {
        console.error('Error: ', error);

        /* En caso de error mostramos un mensaje en la section */
        startSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });