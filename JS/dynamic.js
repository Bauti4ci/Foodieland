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

