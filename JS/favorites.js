// validar si ya existe el array de favoritos en local storage
//funcion que se ejecute al clickear el boton de favoritos, que guarde el id de la receta en favoritos
//event listener que ejecute la funcion

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
    console.log(favorites)
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