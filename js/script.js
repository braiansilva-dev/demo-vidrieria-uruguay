const hamburguer = document.getElementById('hamburguer-btn');
const navMenu = document.getElementById('navbar-nav');

hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});