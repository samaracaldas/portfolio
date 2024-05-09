let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window,onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='
                    + id + ' ]').classList.add
                ('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



ScrollReveal().reveal('.home-img', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.home-content h1, .home-content h3', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.home-content p, .social-icons, .btn', {
    origin: 'bottom',
    duration: 1000,
    distance: '20%'
})


ScrollReveal().reveal('.about-content', {
    origin: 'top',
    duration: 1000,
    distance: '20%'
})

ScrollReveal().reveal('.about-img', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});


ScrollReveal().reveal('.skills .heading', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.skills-box', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.projects .heading', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.projects-container', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.footer .copyright', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.footer .social', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});
