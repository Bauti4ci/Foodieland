const recipes = document.querySelectorAll('.recipesBox');
const saved = document.querySelectorAll('.saves');
const favorites = localStorage.getItem('favorites')
let arrayRecipes = Array.from(recipes).map(recipe => 0);

if (!favorites) {
    localStorage.setItem('favorites', JSON.stringify(arrayRecipes));
} else {
    Array.from(favorites).forEach((favorite, index) => {
        console.log(favorites)
        console.log(recipes)
        if (favorite === 1) {
            recipes[index].classList.add('favorite');
            saved[index].src = 'Svg/Guardados/marcado.svg';
        }
    })
}



function toggleFavorites(position) {
    let savedFavorites = JSON.parse(localStorage.getItem('favorites'));

    savedFavorites[position] = savedFavorites[position] === 0 ? 1 : 0;

    localStorage.setItem('favorites', JSON.stringify(savedFavorites));

    if (savedFavorites[position] === 1) {
        recipes[position].classList.add('favorite');
        saved[position].src = 'Svg/Guardados/marcado.svg';
    } else {
        recipes[position].classList.remove('favorite');
        saved[position].src = 'Svg/Guardados/nomarcado.svg';
    }
}

saved.forEach((favBtn, index) => {
    favBtn.addEventListener('click', () => toggleFavorites(index));
});