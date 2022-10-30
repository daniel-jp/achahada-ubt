const navBar = document.querySelector('.menu .navbar')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

const swiper = new Swiper(".produit-slide", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper2 = new Swiper(".flyer-slide", {
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

let flyerPreviewContainer = document.querySelector('.flyer-preview-container');
let PreviewBox = flyerPreviewContainer.querySelector('.flyer-preview')

document.querySelectorAll('.food .slide').forEach(food => {
    flyerPreviewContainer.style.display = 'flex';

    food.onclick = () => {
        let name = food.getAttribute('data-name');

        PreviewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }

        });

    };
});

flyerPreviewContainer.querySelector('#close-preview').onclick = () => {
    flyerPreviewContainer.style.display = 'none';
    PreviewBox.forEach(close => {
        close.classList.remove('active');
    });
}