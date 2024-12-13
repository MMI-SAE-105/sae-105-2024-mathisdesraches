const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu--open'); 
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('menu--open');
    }
});

const clickableIcons = document.querySelectorAll('.icon__clickable');

clickableIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Icône cliquée !'); 
    });
});

const carouselContainer = document.querySelector('.carousel__container');
const images = document.querySelectorAll('.carousel__image');
const prevButton = document.querySelector('.carousel__btn--prev');
const nextButton = document.querySelector('.carousel__btn--next');

let currentIndex = 0;
const totalImages = images.length; 
function updateCarousel() {
    const offset = -currentIndex * 100; 
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1; 
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0; 
    updateCarousel();
});

let autoScroll = setInterval(() => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 3000);

[prevButton, nextButton].forEach(button => {
    button.addEventListener('mouseenter', () => clearInterval(autoScroll)); 
    button.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 3000);
    });
});

const dots = document.querySelectorAll('.carousel__dot');

function updateDots() {
    dots.forEach(dot => dot.classList.remove('carousel__dot--active'));
    dots[currentIndex].classList.add('carousel__dot--active');
}

updateCarousel();

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

const socialIcons = document.querySelectorAll('.footer__social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Lien social cliqué !'); 
    });
});
