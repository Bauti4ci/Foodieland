const startSection = document.querySelector('#start');

fetch('JSONS/hotRecipes.json')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(hotRecipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const hotRecipesArray = hotRecipes.map(recipe => (
            `<article class="hiddenMobile start" id="${recipe.id}" style="background-image: url(${recipe.image});">
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
                            <p>${recipe.cookingMinutes}</p>
                        </span>
                        <span class="secondbtn">
                            <img src="Svg/icons/forknife.svg" alt="">
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
                        <a href="RecipeDetails.html?id=${recipe.id}">
                        <button class="btn">
                            <p>View recipies</p> <img src="Svg/icons/play.svg" alt="">
                        </button>
                        </a>
                    </div>
                    <img src="Imagenes/start/Badge.png" alt="" class="badge">
                </div>
            </article>`


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