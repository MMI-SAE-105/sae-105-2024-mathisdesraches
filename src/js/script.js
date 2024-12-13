// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;


// Largeur de dÃ©filement dâ€™un item
if (carousel) {
 // Scroll au clic sur le bouton prÃ©cÃ©dent
 prevButton.addEventListener("click", () => {
   carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
 });


 // Scroll au clic sur le bouton suivant
 nextButton.addEventListener("click", () => {
   carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
 });
}

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
})
