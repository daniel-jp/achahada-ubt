import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';

import Swiper from 'swiper';

// import Swiper and modules styles

const navBar = document.querySelector(".menu .navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});


var swiper = new Swiper(".produit-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".surgel-slide", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper = new Swiper(".flyer-slide", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});







let flyerPreviewContainer = document.querySelector(".flyer-preview-container")
let PreviewBox = flyerPreviewContainer.querySelectorAll(".flyer-preview")

document.querySelectorAll(".food .slide").forEach(food => {
    flyerPreviewContainer.style.display = "flex";

    food.addEventListener("click", () => {
        flyerPreviewContainer.style.display = 'flex';
        let name = food.getAttribute("data-name");
        PreviewBox.forEach(preview => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
                preview.classList.add('active');
            }
        });
    });
});

flyerPreviewContainer.querySelector('#close-preview')

.addEventListener("click", () => {
    flyerPreviewContainer.style.display = 'none';
    PreviewBox.forEach(close => {
        close.classList.remove('active')
    });
});