const recipes = document.querySelectorAll('.recipes');
const saved = document.querySelectorAll('.heart');
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
console.log(recipes)
if (favorites.length === 0) {
    favorites = Array.from(recipes).map(() => 0);
    localStorage.setItem('favorites', JSON.stringify(favorites));
} else {
    favorites.forEach((favorite, index) => {
        if (favorite === 1) {
            recipes[index].classList.add('favorite');
            saved[index].src = 'Svg/Guardados/marcado.svg';
        }
    });
}

function toggleFavorites(position) {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

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
