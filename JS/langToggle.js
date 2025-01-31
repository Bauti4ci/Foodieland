const toggle = document.querySelector('.langToggle')
const toggleText = document.querySelector('.langToggle p')
const navMenu = document.querySelectorAll('.nav .navbtn');
const navMenuOriginalValue = navMenu.innerText
const arrayNavMenuEs = ['Inicio','Recetas','Blog','Contacto','Acerca nuestro',]
const footerMenu = document.querySelectorAll('.footer .navbtn');
const footerMenuOriginalValue = footerMenu.innerText
const arrayFooterMenuEs = ['Recetas','Blog','Contacto','Acerca nuestro',]
const h1 = document.querySelectorAll('h1');
const h1OriginalValue = h1.innerText
const labels = document.querySelectorAll('.labels p');
const labelsOriginalValue = labels.innerText
const arrayEsLabels = ['30 minutos','Pollo',]
const details = document.querySelectorAll('.mobileDetails p');
const detailsOriginalValue = details.innerText
const topLabel = document.querySelectorAll('.firstbtn p');
const topLabelOriginalValue = topLabel.innerText
const btns = document.querySelectorAll('.btn p');
const btnsOriginalValue = btns.innerText
const arrayEsBtns = ['Ver receta','Conocer más','Conocer más','Visita nuestro Instagram','Suscribirse',]
const dates = document.querySelectorAll('.date');
const datesOriginalValue = dates.innerText
const h2 = document.querySelector('h2');
const h2OriginalValue = h2.innerText
const categBtn = document.querySelector('.topCateg button');
const categBtnOriginalValue = categBtn.innerText
const categ = document.querySelectorAll('.footerCateg p');
const categOriginalValue = categ.innerText
const arrayEsCateg = ['Desayuno','Vegano','Carne','Postres','Almuerzo','Chocolate',]
const h3 = document.querySelector('h3');
const h3OriginalValue = h3.innerText
const recipeNames = document.querySelectorAll('.recipesBox a');
const recipeNamesOriginalValue = recipeNames.innerText
const arrayEsRecipes = ['Grande y deliciosa hamburguesa con queso','Salmón asado a la lima fresca con salsa de jengibre','Panqueque de avena y fresa con jarabe de miel','Ensalada de mayonesa mixta fresca y saludable','Albóndigas de pollo con queso crema','Panqueque afrutado con naranja y arándanos','El mejor arroz con pollo fácil en una olla','La pasta de pollo y tocino más cremosa',]
const recipeDetails = document.querySelectorAll('.recipesBox p');
const recipeDetailsOriginalValue = recipeDetails.innerText
const esRecipesDetails = ['30 minutos','Snack','30 minutos','Pescado','30 minutos','Desayuno','30 minutos','Saludable','30 minutos','Carne','30 minutos','Dulce','30 minutos','Snack','30 minutos','Pastas',]
const h4 = document.querySelector('h4');
const h4OriginalValue = h4.innerText
const h5 = document.querySelector('h5');
const h5OriginalValue = h5.innerText
const postLocation = document.querySelectorAll('.postLocation');
const postLocationOriginalValue = postLocation.innerText
const postDate = document.querySelectorAll('.postDate');
const postDateOriginalValue = postDate.innerText
const postLikes = document.querySelectorAll('.likes p');
const postLikesOriginalValue = postLikes.innerHTML
const postCaption = document.querySelectorAll('.caption');
const postCaptionOriginalValue = postCaption.innerHTML
const esCaptions = ['<p><b>Foodieland.</b> Los platos de verduras deben tener cierta vitamina para esas personas</p > ','<p><b>Foodieland.</b> La comida dulce puede hacer feliz a alguien, siempre y cuando no coma demasiado</p > ','<p><b>Foodieland.</b> ¿Qué estás haciendo antes de empezar a cocinar? ¿Preparar las herramientas o los ingredientes?</p > ','<p><b>Foodieland.</b> El bistec nunca está mal, es adecuada para ti que quieres una cena romántica</p > ',]
const h6 = document.querySelector('h6');
const h6OriginalValue = h6.innerText
const otherRecipes = document.querySelectorAll('.otherRecipesBox a');
const otherRecipesOriginalValue = otherRecipes.innerText
const esOtherRecipes = ['Ensalada mixta de frutas tropicales con suplementos','Carne de wagyu grande y jugosa','Arroz frito japonés saludable con espárragos','Tacos vegetarianos de coliflor y nueces','Ensalada de pollo arcoíris con aderezo de almendras, miel y mostaza','Sándwiches picantes a la barbacoa con papas fritas','Wraps de lechuga veganos - ¡Picante!','Sopa Ramen de pollo con champiñones',]
const otherDetails = document.querySelectorAll('.dailyDetails p');
const otherDetailsOriginalValue = otherDetails.innerText
const esOtherDetails = ['30 minutos','Saludable','30 minutos','Occidental','30 minutos','Saludable','30 minutos','Oriental','30 minutos','Saludable','30 minutos','Snack','30 minutos','Mariscos','30 minutos','Japonés',]
const input = document.querySelector(".inboxInput");
const inputOriginalValue = input.placeholder
const h7 = document.querySelector('.h7');
const h7OriginalValue = h7.innerText
let lang = localStorage.getItem('lang')

setLang()

function toggleLang() {
    if (lang && lang === "en") {
        localStorage.setItem('lang', 'es')
    } else {
        localStorage.setItem('lang', 'en')
    }

    lang = localStorage.getItem('lang')
    
    setLang() 
}

function setLang() {
    if (lang === "es") {
        
        toggleText.innerText = "ES"
        navMenu.forEach((nav, index) => {
            nav.innerText = arrayNavMenuEs[index];
        })
        footerMenu.forEach((footer, index) => {
            footer.innerText = arrayFooterMenuEs[index];
        })
        h1.forEach(h1 => {
            h1.innerText = "Deliciosas y picantes alitas de pollo";
        })
        labels.forEach((label, index) => {
            label.innerText = arrayEsLabels[index];
        })
        details.forEach((detail, index) => {
            detail.innerText = arrayEsLabels[index];
        })
        topLabel.forEach(topLabel => {
            topLabel.innerText = "Recetas destacadas"
        })
        btns.forEach((btn, index) => {
            btn.innerText = arrayEsBtns[index];
        })
        dates.forEach(date => {
            date.innerText = "Marzo 15, 2022";
        })
        h2.innerText = "Categorias";
        categBtn.innerText = "Ver todas las categorias";
        categ.forEach((categ, index) => {
            categ.innerText = arrayEsCateg[index];
        })
        h3.innerText = "Simples y deliciosas recetas";
        recipeNames.forEach((recipe, index) => {
            recipe.innerText = arrayEsRecipes[index];
        })
        recipeDetails.forEach((detail, index) => {
            detail.innerText = esRecipesDetails[index];
        })
        h4.innerText = "Cualquiera puede ser un chef en su propia cocina";
        h5.innerText = "Visita @foodieland en Instagram";
        postLocation.forEach(location => {
            location.innerText = "Tokio, Japón";
        })
        postDate.forEach(date => {
            date.innerText = "19 de septiembre";
        })
        postLikes.forEach(like => {
            like.innerHTML = "<p>Le gustó a <b>craig_love</b> y a <b>44,686 otros</b><p>";
        })
        postCaption.forEach((caption, index) => {
            caption.innerHTML = esCaptions[index];
        })
        h6.innerHTML = "Prueba esta deliciosa receta para alegrar tu día";
        otherRecipes.forEach((recipe, index) => {
            recipe.innerText = esOtherRecipes[index];
        })
        otherDetails.forEach((detail, index) => {
            detail.innerText = esOtherDetails[index];
        })
        h7.innerText = "Delicias en tu bandeja de entrada";
        input.placeholder = "Tu dirección de email..."
    } else {
        toggleText.innerText = "EN"
        navMenu.innerText = navMenuOriginalValue
        footerMenu.innerText = footerMenuOriginalValue
        h1.innerText = h1OriginalValue
        labels.innerText = labelsOriginalValue
        details.innerText = detailsOriginalValue
        topLabel.innerText = topLabelOriginalValue
        btns.innerText = btnsOriginalValue
        dates.innerText = datesOriginalValue
        h2.innerText = h2OriginalValue
        categBtn.innerText = categBtnOriginalValue
        categ.innerText = categOriginalValue
        h3.innerText = h3OriginalValue
        recipeNames.innerText = recipeNamesOriginalValue
        recipeDetails.innerText = recipeDetailsOriginalValue
        h4.innerText = h4OriginalValue
        h5.innerText = h5OriginalValue
        postLocation.innerText = postLocationOriginalValue
        postDate.innerText = postDateOriginalValue
        postLikes.innerHTML = postLikesOriginalValue
        postCaption.innerHTML = postCaptionOriginalValue
        h6.innerText = h6OriginalValue
        otherRecipes.innerText = otherRecipesOriginalValue
        otherDetails.innerText = otherDetailsOriginalValue
        input.placeholder = inputOriginalValue
        h7.innerText = h7OriginalValue
    }
}

toggle.addEventListener('click', toggleLang)




// 1) 
// Empezar a ordenar el código
    // Evitar spanglish (todo en inglés)
    // carpetas
        // css
        // js
        // img
        // archivos modularizados
        // archivo menú de hamburguesa nav
        // archivo lang-toggle
    // orden dentro de los archivos
        // declaraciones
            // primero la declaración de las variables
                // constantes query selectors primero de todo
                // primero las constantes, después las let
            // después las funciones 
        // ejecuciones
            // después los event listeners
            // después los condicionales específicos

// 2)
// Hacer el botón de toggle de idioma
    // Maquetar el toggle (html & css)
    // Tengo que darle vida al toggle
        // Tengo que inicializar el valor del idioma, en una variable
        // Lo tengo que selectar en JS
        // Al nodo selectado, le tengo que poner un event listener (onclick)
        // Me tengo que preguntar en qué idioma está (condicional)
        // En base al idioma, voy a tener que usar el valor original ó el de español

// 3) Implementar web storage (local storage o session storage) 

// 4) BONUS: implementar con localStorage favoritos 
// contempla si entro por primera vez, que todos tienen que estar opacados, no tiene que haber seleccionados
// si selecciono un par de favoritos, cierro el navegador y vuelvo a entrar, tienen que estar seleccionados