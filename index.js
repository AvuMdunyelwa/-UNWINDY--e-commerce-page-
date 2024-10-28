const hamBurger = document.querySelector('.hamburger');
const navbarUl = document.querySelector('.navbar ul');

hamBurger.addEventListener('click', ()  => {
    hamBurger.classList.toggle('active');
    navbarUl.classList.toggle('active');
    console.log(hamBurger);
    console.log();
})


