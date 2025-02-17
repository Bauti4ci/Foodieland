const params = new URLSearchParams(window.location.search);
const recipeId = params.get('id');
const main = document.querySelector('main')



fetch('JSONS/Recipes.json')
    .then(response => response.json())
    .then(recipes => {
        let selectedRecipe = {}

        recipes.forEach(recipe => {
            if (recipe.id == recipeId) {
                selectedRecipe = recipe
            }
        })
        console.log(selectedRecipe)
        if (selectedRecipe.id === undefined) {
        } else {
            main.innerHTML = `
        <section class="header">
            <div class="title">
                <h1>${selectedRecipe.title}</h1>
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
                                <p class="time">${selectedRecipe.preparationMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/timer.svg" alt="" class="icons">
                            <div class="detailContext">
                                <p class="timeType">COCK TIME</p>
                                <p class="time">${selectedRecipe.cookingMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/forknife.svg" alt="" class="icons">
                            <p class="foodType">${selectedRecipe.type}</p>
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
                    <img src="${selectedRecipe.image}" alt="" class="recipeVidImg">
                    <img src="Imagenes/recipeDetailsPage/Group 884.png" alt="" class="recipeVidIcon">
                </div>
                <div class="nutrition">
                    <div class="nutritionBox">
                        <h2>Nutrition Information</h2>
                        <span class="nutData">
                            <p class="nutDataType">Calories</p>
                            <p class="nutDataValue">${selectedRecipe.calories}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Total Fat</p>
                            <p class="nutDataValue">${selectedRecipe.fat}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Protein</p>
                            <p class="nutDataValue">${selectedRecipe.protein}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Carbohydrate</p>
                            <p class="nutDataValue">${selectedRecipe.carbohydrates}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Cholesterol</p>
                            <p class="nutDataValue">${selectedRecipe.cholesterol}</p>
                        </span>
                        <hr>

                    </div>
                    <p class="nutDescription">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. </p>
                </div>
            </div>
            <p class="principalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>


        <section class="ingredients">
            <div class="list">
                <h3>Ingredients</h3>
                <div class="ing">
                    <p>For main dish</p>
                    <ul class"ingridientsList">
                        ${selectedRecipe.extendedIngredients.map(ingredient => {
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
                <div>
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
        </section>

        <Section class="directions">
            <h3>Directions</h3>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">1. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
                <img src="Imagenes/recipeDetailsPage/Rectangle 23.png" alt="">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">2. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">3. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
        </Section>


        <section class="inbox">
            <p class="h7">Deliciousness to your inbox</p>
            <p class="inboxText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br>
                incididunt ut labore et dolore magna aliqut enim ad minim </p>

            <form action="" class="inboxForm">
                <input type="email" class="inboxInput" placeholder="Your email address...">
                <button class="btn">Subscribe</button>
            </form>
            <img src="Imagenes/inbox/left.png" alt="" class="hiddenMobile inboxImgLeft">
            <img src="Imagenes/inbox/right.png" alt="" class="hiddenMobile inboxImgRight">
        </section>


        <section class="otherRecipes">
            <h6> You may like these recipe too </h6>
            <div class="otherRecipesGrid">
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/1.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Mixed Tropical Fruit Salad with Superfood Boosts</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/2.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Western</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/3.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Healthy Japanese Fried Rice with Asparagus</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/4.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Cauliflower Walnut Vegetarian Taco Meats</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Eastern</span>
                    </div>
                </article>
            </div>
        </section>`

        }


        return selectedRecipe
    })

    .catch(error => {
        console.error('Error: ', error);

        main.innerHTML = '<p class"error">Hubo un error al cargar las recipes, recargue la página</p>';
    });

fetch('JSONS/otherRecipes.json')
    .then(response => response.json())
    .then(otherRecipes => {
        let selectedRecipe = {}

        otherRecipes.forEach(recipe => {
            if (recipe.id == recipeId) {
                selectedRecipe = recipe
            }
        })
        if (selectedRecipe.id === undefined) {
        } else {
            main.innerHTML = `
        <section class="header">
            <div class="title">
                <h1>${selectedRecipe.title}</h1>
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
                                <p class="time">${selectedRecipe.preparationMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/timer.svg" alt="" class="icons">
                            <div class="detailContext">
                                <p class="timeType">COCK TIME</p>
                                <p class="time">${selectedRecipe.cookingMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/forknife.svg" alt="" class="icons">
                            <p class="foodType">${selectedRecipe.type}</p>
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
                    <img src="${selectedRecipe.image}" alt="" class="recipeVidImg">
                    <img src="Imagenes/recipeDetailsPage/Group 884.png" alt="" class="recipeVidIcon">
                </div>
                <div class="nutrition">
                    <div class="nutritionBox">
                        <h2>Nutrition Information</h2>
                        <span class="nutData">
                            <p class="nutDataType">Calories</p>
                            <p class="nutDataValue">${selectedRecipe.calories}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Total Fat</p>
                            <p class="nutDataValue">${selectedRecipe.fat}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Protein</p>
                            <p class="nutDataValue">${selectedRecipe.protein}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Carbohydrate</p>
                            <p class="nutDataValue">${selectedRecipe.carbohydrates}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Cholesterol</p>
                            <p class="nutDataValue">${selectedRecipe.cholesterol}</p>
                        </span>
                        <hr>

                    </div>
                    <p class="nutDescription">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. </p>
                </div>
            </div>
            <p class="principalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>


        <section class="ingredients">
           <div class="list">
                <h3>Ingredients</h3>
                <div class="ing">
                    <p>For main dish</p>
                    <ul class"ingridientsList">
                        ${selectedRecipe.extendedIngredients.map(ingredient => {
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
                <div>
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
        </section>

        <Section class="directions">
            <h3>Directions</h3>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">1. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
                <img src="Imagenes/recipeDetailsPage/Rectangle 23.png" alt="">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">2. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">3. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
        </Section>


        <section class="inbox">
            <p class="h7">Deliciousness to your inbox</p>
            <p class="inboxText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br>
                incididunt ut labore et dolore magna aliqut enim ad minim </p>

            <form action="" class="inboxForm">
                <input type="email" class="inboxInput" placeholder="Your email address...">
                <button class="btn">Subscribe</button>
            </form>
            <img src="Imagenes/inbox/left.png" alt="" class="hiddenMobile inboxImgLeft">
            <img src="Imagenes/inbox/right.png" alt="" class="hiddenMobile inboxImgRight">
        </section>


        <section class="otherRecipes">
            <h6> You may like these recipe too </h6>
            <div class="otherRecipesGrid">
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/1.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Mixed Tropical Fruit Salad with Superfood Boosts</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/2.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Western</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/3.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Healthy Japanese Fried Rice with Asparagus</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/4.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Cauliflower Walnut Vegetarian Taco Meats</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Eastern</span>
                    </div>
                </article>
            </div>
        </section>`

        }
    })
    .catch(error => {
        console.error('Error: ', error);

        main.innerHTML = '<p class"error">Hubo un error al cargar la recipes, recargue la página</p>';
    });

fetch('JSONS/hotRecipes.json')
    .then(response => response.json())
    .then(hotRecipes => {
        let selectedRecipe = {}

        hotRecipes.forEach(recipe => {
            if (recipe.id == recipeId) {
                selectedRecipe = recipe
            }
        })
        console.log(selectedRecipe)
        if (selectedRecipe.id === undefined) {
        } else {
            main.innerHTML = `
        <section class="header">
            <div class="title">
                <h1>${selectedRecipe.title}</h1>
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
                                <p class="time">${selectedRecipe.preparationMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/timer.svg" alt="" class="icons">
                            <div class="detailContext">
                                <p class="timeType">COCK TIME</p>
                                <p class="time">${selectedRecipe.cookingMinutes}</p>
                            </div>
                        </div>
                        <span class="dividers"></span>
                        <div class="detail">
                            <img src="Svg/icons/forknife.svg" alt="" class="icons">
                            <p class="foodType">${selectedRecipe.type}</p>
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
                    <img src="${selectedRecipe.image}" alt="" class="recipeVidImg">
                    <img src="Imagenes/recipeDetailsPage/Group 884.png" alt="" class="recipeVidIcon">
                </div>
                <div class="nutrition">
                    <div class="nutritionBox">
                        <h2>Nutrition Information</h2>
                        <span class="nutData">
                            <p class="nutDataType">Calories</p>
                            <p class="nutDataValue">${selectedRecipe.calories}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Total Fat</p>
                            <p class="nutDataValue">${selectedRecipe.fat}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Protein</p>
                            <p class="nutDataValue">${selectedRecipe.protein}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Carbohydrate</p>
                            <p class="nutDataValue">${selectedRecipe.carbohydrates}</p>
                        </span>
                        <hr>
                        <span class="nutData">
                            <p class="nutDataType">Cholesterol</p>
                            <p class="nutDataValue">${selectedRecipe.cholesterol}</p>
                        </span>
                        <hr>

                    </div>
                    <p class="nutDescription">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. </p>
                </div>
            </div>
            <p class="principalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>


        <section class="ingredients">
            <div class="list">
                <h3>Ingredients</h3>
                <div class="ing">
                    <p>For main dish</p>
                    <ul>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>

                    </ul>
                </div>
                <div class="ing">
                    <p>For the sauce</p>
                    <ul>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                        <span>
                            <input type="checkbox" name="" id="check" class="check">
                            <label for="check">Lorem ipsum dolor sit amet</label>
                        </span>
                        <hr>
                    </ul>
                </div>
            </div>
            <div class="otherRecipesInDetails">
                <div>
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
        </section>

        <Section class="directions">
            <h3>Directions</h3>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">1. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
                <img src="Imagenes/recipeDetailsPage/Rectangle 23.png" alt="">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">2. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
            <article class="steps">
                <span>
                    <input type="checkbox" name="" id="check">
                    <label for="check">3. Lorem ipsum dolor sit amet</label>
                </span>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.</p>
            </article>
            <hr>
        </Section>


        <section class="inbox">
            <p class="h7">Deliciousness to your inbox</p>
            <p class="inboxText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor<br>
                incididunt ut labore et dolore magna aliqut enim ad minim </p>

            <form action="" class="inboxForm">
                <input type="email" class="inboxInput" placeholder="Your email address...">
                <button class="btn">Subscribe</button>
            </form>
            <img src="Imagenes/inbox/left.png" alt="" class="hiddenMobile inboxImgLeft">
            <img src="Imagenes/inbox/right.png" alt="" class="hiddenMobile inboxImgRight">
        </section>


        <section class="otherRecipes">
            <h6> You may like these recipe too </h6>
            <div class="otherRecipesGrid">
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/1.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Mixed Tropical Fruit Salad with Superfood Boosts</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/2.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Western</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/3.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/marcado.svg" alt="" class="dailySaves">
                    <p>Healthy Japanese Fried Rice with Asparagus</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Healthy</span>
                    </div>
                </article>
                <article class="otherRecipesBox">
                    <img src="Imagenes/dailyRecipes/4.png" alt="" class="dailyImg">
                    <img src="Svg/Guardados/nomarcado.svg" alt="" class="dailySaves">
                    <p>Cauliflower Walnut Vegetarian Taco Meats</p>
                    <div class="dailyDetails">
                        <span><img src="Svg/icons/timer.svg" alt="" class="dailyIcons">30 Minutes</span>
                        <span><img src="Svg/icons/forknife.svg" alt="" class="dailyIcons">Eastern</span>
                    </div>
                </article>
            </div>
        </section>`

        }
    })
    .catch(error => {
        console.error('Error: ', error);

        main.innerHTML = '<p class"error">Hubo un error al cargar la recipes, recargue la página</p>';
    });    