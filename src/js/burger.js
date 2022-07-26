let headerBurger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let headerLink = document.querySelectorAll('.header__nav-link');
headerBurger.addEventListener('click' , () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active')

})