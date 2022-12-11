const hamburgerButton = document.querySelector('.header__burger');
const headerMobile = document.querySelector('.header__nav-mobile');
const overlay = document.querySelector('.overlay')

function headerMobileOpen() {
    headerMobile.classList.toggle('header__nav-mobile--active');
    overlay.classList.toggle('overlay--active');
}

hamburgerButton.addEventListener('click', headerMobileOpen);
overlay.addEventListener('click', headerMobileOpen);