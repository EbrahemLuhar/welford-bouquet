import '../../src/styles/scss/main.scss';

const hamburgerMenu = document.querySelector('.fas.fa-bars');
const closeNavTimes = document.querySelector('.fas.fa-times');
const mobileNav = document.querySelector('.mobile-navbar');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('toggle-mobile-nav');
})

closeNavTimes.addEventListener('click', () => {
    mobileNav.classList.toggle('toggle-mobile-nav');
})