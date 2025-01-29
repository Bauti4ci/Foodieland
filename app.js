const dynamic = document.getElementById('dynamic');

const openClose = document.getElementById('openClose');

let isOpen = false;

function dynamicMenu() {
    if (!isOpen) {

        openClose.src = "Svg/nav/closingX.svg";

        dynamic.classList.add('view');

        dynamic.classList.remove('hide');

        isOpen = true;
    } else {

        openClose.src = "Svg/nav/menu.svg"

        dynamic.classList.add('hide');

        dynamic.classList.remove('view');

        isOpen = false;
    }

}

document.getElementById('openClose').addEventListener('click', dynamicMenu);

const navMenu = document.querySelectorAll('.nav .navbtn');

const arrayNavMenu = [
    'Inicio',
    'Recetas',
    'Blog',
    'Contacto',
    'Acerca nuestro',
]

navMenu.forEach((nav, index) => {
    nav.innerText = arrayNavMenu[index];
})

const footerMenu = document.querySelectorAll('.footer .navbtn');

const arrayFooterMenu = [
    'Recetas',
    'Blog',
    'Contacto',
    'Acerca nuestro',
]

footerMenu.forEach((footer, index) => {
    footer.innerText = arrayFooterMenu[index];
})

const h1Spanish = document.querySelectorAll('h1');

h1Spanish.forEach(h1 => {
    h1.innerText = "Deliciosas y picantes alitas de pollo";
})


const arraySpanishLabels = [
    '30 minutos',
    'Pollo',
]

const labels = document.querySelectorAll('.labels p');

labels.forEach((label, index) => {
    label.innerText = arraySpanishLabels[index];
})

const details = document.querySelectorAll('.mobileDetails p');

details.forEach((detail, index) => {
    detail.innerText = arraySpanishLabels[index];
})

const topLabel = document.querySelectorAll('.firstbtn p');

topLabel.forEach(topLabel => {
    topLabel.innerText = "Recetas destacadas"
})


const arraySpanishBtns = [
    'Ver receta',
    'Conocer más',
    'Conocer más',
    'Visita nuestro Instagram',
    'Suscribirse',
]

const btns = document.querySelectorAll('.btn p');

btns.forEach((btn, index) => {
    btn.innerText = arraySpanishBtns[index];
})

const dates = document.querySelectorAll('.date');

dates.forEach(date => {
    date.innerText = "Marzo 15, 2022";
})

const h2 = document.querySelector('h2');

h2.innerText = "Categorias";

const categBtn = document.querySelector('.topCateg button');

categBtn.innerText = "Ver todas las categorias";

const categ = document.querySelectorAll('.footerCateg p');

const arraySpanishCateg = [
    'Desayuno',
    'Vegano',
    'Carne',
    'Postres',
    'Almuerzo',
    'Chocolate',
]

categ.forEach((categ, index) => {
    categ.innerText = arraySpanishCateg[index];
})

const h3 = document.querySelector('h3');

h3.innerText = "Simples y deliciosas recetas";

const spanishRecipes = [
    'Grande y deliciosa hamburguesa con queso',
    'Salmón asado a la lima fresca con salsa de jengibre',
    'Panqueque de avena y fresa con jarabe de miel',
    'Ensalada de mayonesa mixta fresca y saludable',
    'Albóndigas de pollo con queso crema',
    'Panqueque afrutado con naranja y arándanos',
    'El mejor arroz con pollo fácil en una olla',
    'La pasta de pollo y tocino más cremosa',
]

const recipeNames = document.querySelectorAll('.recipesBox a');

recipeNames.forEach((recipe, index) => {
    recipe.innerText = spanishRecipes[index];
})

const recipeDetails = document.querySelectorAll('.recipesBox p');

const spanishDetails = [
    '30 minutos',
    'Snack',
    '30 minutos',
    'Pescado',
    '30 minutos',
    'Desayuno',
    '30 minutos',
    'Saludable',
    '30 minutos',
    'Carne',
    '30 minutos',
    'Dulce',
    '30 minutos',
    'Snack',
    '30 minutos',
    'Pastas',
]

recipeDetails.forEach((detail, index) => {
    detail.innerText = spanishDetails[index];
})

const h4 = document.querySelector('h4');

h4.innerText = "Cualquiera puede ser un chef en su propia cocina";

const h5 = document.querySelector('h5');

h5.innerText = "Visita @foodieland en Instagram";

const postLocation = document.querySelectorAll('.postLocation');

postLocation.forEach(location => {
    location.innerText = "Tokio, Japón";
})

const postDate = document.querySelectorAll('.postDate');

postDate.forEach(date => {
    date.innerText = "19 de septiembre";
})

const postLikes = document.querySelectorAll('.likes p');

postLikes.forEach(like => {
    like.innerHTML = "<p>Le gustó a <b>craig_love</b> y a <b>44,686 otros</b><p>";
})

const postCaption = document.querySelectorAll('.caption');

const spanishCaptions = [
    '<p><b>Foodieland.</b> Los platos de verduras deben tener cierta vitamina para esas personas</p > ',
    '<p><b>Foodieland.</b> La comida dulce puede hacer feliz a alguien, siempre y cuando no coma demasiado</p > ',
    '<p><b>Foodieland.</b> ¿Qué estás haciendo antes de empezar a cocinar? ¿Preparar las herramientas o los ingredientes?</p > ',
    '<p><b>Foodieland.</b> El bistec nunca está mal, es adecuada para ti que quieres una cena romántica</p > ',
]

postCaption.forEach((caption, index) => {
    caption.innerHTML = spanishCaptions[index];
})

const h6 = document.querySelector('h6');

h6.innerHTML = "Prueba esta deliciosa receta para alegrar tu día";

const otherRecipes = document.querySelectorAll('.dailyBox a');

const spanishOtherRecipes = [
    'Ensalada mixta de frutas tropicales con suplementos',
    'Carne de wagyu grande y jugosa',
    'Arroz frito japonés saludable con espárragos',
    'Tacos vegetarianos de coliflor y nueces',
    'Ensalada de pollo arcoíris con aderezo de almendras, miel y mostaza',
    'Sándwiches picantes a la barbacoa con papas fritas',
    'Wraps de lechuga veganos - ¡Picante!',
    'Sopa Ramen de pollo con champiñones',
]

otherRecipes.forEach((recipe, index) => {
    recipe.innerText = spanishOtherRecipes[index];
})

const otherDetails = document.querySelectorAll('.dailyDetails p');

const spanishOtherDetails = [
    '30 minutos',
    'Saludable',
    '30 minutos',
    'Occidental',
    '30 minutos',
    'Saludable',
    '30 minutos',
    'Oriental',
    '30 minutos',
    'Saludable',
    '30 minutos',
    'Snack',
    '30 minutos',
    'Mariscos',
    '30 minutos',
    'Japonés',
]

otherDetails.forEach((detail, index) => {
    detail.innerText = spanishOtherDetails[index];
})

const h7 = document.querySelector('.h7');

h7.innerText = "Delicias en tu bandeja de entrada";
