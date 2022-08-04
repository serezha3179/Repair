let header = document.querySelector('.header');
let headerBurger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let headerLink = document.querySelectorAll('.header__nav-link');
let body = document.querySelector('body');
headerBurger.addEventListener('click' , () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('lock');
})