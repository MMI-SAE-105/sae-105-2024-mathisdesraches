document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(button.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML += `<p>&copy; ${currentYear} Festival des films d'animation japonais</p>`;
}
