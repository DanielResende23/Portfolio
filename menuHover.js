const marker = document.querySelector('#marker');
const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

function indicator(element) {
    if (!marker || !element) return;

    marker.style.left = `${element.offsetLeft}px`;
    marker.style.width = `${element.offsetWidth}px`;
}

function closeMenu() {
    menuToggle?.classList.remove('active');
    navigation?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
    const isOpen = navigation?.classList.toggle('active');
    menuToggle?.classList.toggle('active', Boolean(isOpen));
    menuToggle?.setAttribute('aria-expanded', String(Boolean(isOpen)));
}

navigationItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        indicator(event.currentTarget);
        closeMenu();
    });
});

window.addEventListener('resize', closeMenu);
window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
    indicator(navigationItems[0]);
    reveal();
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const revealPoint = 50;

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}
