var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target)
    })
})

window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
        let windowHeigth = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50

        if (revealTop < windowHeigth - revealPoint) {
            reveals[i].classList.add("active")
        }


    }
}

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle')
    let navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

    const navigationItems = document.querySelectorAll(".navigation a")

    navigationItems.forEach((navigationItems) => {
        navigationItems.addEventListener("click", () => {
            menuToggle.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
}

const navigationItems = document.querySelectorAll(".navigation a")

navigationItems.forEach((navigationItems) => {
    navigationItems.addEventListener("click", () => {
        menuToggle.classList.remove('active')
        navigation.classList.remove('active')
    })
})
