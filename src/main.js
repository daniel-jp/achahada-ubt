import './css/style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

const navBar = document.querySelector('.menu .navbar')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

var swiper = new Swiper(".produit-slide", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});