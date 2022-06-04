const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');
    
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    }); 
}



navSlide();         