export function toggleFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favBtn = document.getElementById(id)
    if (favorites.includes(id)) {
        favorites.splice(id)
        favBtn.src = "Svg/Guardados/nomarcado.svg"
    } else {
        favorites.push(id)
        favBtn.src = "Svg/Guardados/marcado.svg"
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function evalFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favBtn = document.getElementById(id)
    if (favorites.includes(id)) {
        favBtn.src = "Svg/Guardados/marcado.svg"
    } else {
        favBtn.src = "Svg/Guardados/nomarcado.svg"
    }
}