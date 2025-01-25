const dynamic = document.getElementById('dynamic');

const openClose = document.getElementById('openClose');

let isOpen = false;

function dynamicMenu() {
    if (!isOpen) {

        openClose.src = "Svg/nav/closingX.svg";

        dynamic.classList.remove('hide');

        dynamic.classList.add('extended');

        isOpen = true;
    } else {

        openClose.src = "Svg/nav/menu.svg"

        dynamic.classList.remove('extended');

        dynamic.classList.add('hide');

        isOpen = false;
    }

}

document.getElementById('openClose').addEventListener('click', dynamicMenu);