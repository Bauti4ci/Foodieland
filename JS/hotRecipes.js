const startSection = document.querySelector('.start');

fetch('JSONS/hotRecipes.json')
    /* La respuesta tiene un body con un json dentro, osea es string */
    .then(response => response.json())
    /* Se convierte el json a objeto/array */
    .then(hotRecipes => {
        /* Por cada recipe creamos un article (importante guardarlo como string) */
        const hotRecipesArrayArticles = hotRecipes.map(recipe => (
            `<article class="recipesBox recipes" id="">
                    <img src="${recipe.image}" alt="" class="gridPhoto">
                    <img src="Svg/Guardados/nomarcado.svg" id="${recipe.id}" alt="" class="saves heart">
                    <a href="RecipeDetails.html">${recipe.title}</a>
                    <div class="recipesDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="recipesIcons">
                            <p>${recipe.cookTime}</p>
                        </span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="recipesIcons">
                            <p>${recipe.type}</p>
                        </span>
                    </div>
                </article>`

                `<div class="leftstart" ${recipe.id}>
                <span class="firstbtn">
                    <img src="Imagenes/start/pergamino.png" alt="">
                    <p>Hot Recipes</p>
                </span>
                <a href="RecipeDetails.html">
                    <h1 class="homeTranslate">${recipe.title}</h1>
                </a>
                <p class="subH">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos iste laboriosam
                    consequatur
                    pariatur error obcaecati placeat unde nihil facilis!</p>
                <div class="labels">
                    <span class="secondbtn">
                        <img src="Svg/icons/timer.svg" alt="">
                        <p>${recipe.cookTime}</p>
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
                    <button class="btn">
                        <p>View recipies</p> <img src="Svg/icons/play.svg" alt="">
                    </button>
                </div>
                <img src="Imagenes/start/Badge.png" alt="" class="badge">
            </div>`
        ));


        /* Agregamos la foto en la posicion que queramos */
        hotRecipesArrayArticles.splice(5, 0, '<img src="Imagenes/recipies/Ads.png" alt="Ads" class="ad">');

        /* Agregamos el array (en formato string) de recipes dentro de la section */
        recipesSection.innerHTML = hotRecipesArrayArticles.join(' ');

        return hotRecipes

    })

    .then(hotRecipes => {

        /* Recipes es el array de recetas */
        /* Podemos ir una por una y buscar la imagen del <3 de cada una segun el id */
        /* Una vez tenemos la img podemos agregarle el eventListener  */
        hotRecipes.forEach(recipe => {
            const favBtn = document.getElementById(recipe.id)
            evalFavorites(recipe.id)
            favBtn.addEventListener('click', () => toggleFavorites(recipe.id))
        });



    })

    /* Se ejecuta en caso de error */
    .catch(error => {
        console.error('Error: ', error);

        /* En caso de error mostramos un mensaje en la section */
        recipesSection.innerHTML = '<p>Hubo un error al cargar las recipes, recargue la página</p>';
    });