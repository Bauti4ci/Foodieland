const dynamic = document.getElementById('dynamic');
const openIcon = document.getElementById('open');
const closeIcon = document.getElementById('close');

function dynamicMenu() {

    if (dynamic.style.display === 'none') {
        dynamic.style.display = 'flex';
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        dynamic.style.display = 'none';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

document.getElementById('open').addEventListener('click', dynamicMenu);
document.getElementById('close').addEventListener('click', dynamicMenu);
