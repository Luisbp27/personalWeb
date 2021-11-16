/*===== VISUALIZACIÓN MENU =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/* ===== ATIVAR Y ELIMINAR EL MENU ===== */
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /* Activar link */
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /* Eliminamos el menu móvil */
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== SCROLL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL INCIO*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL SOBRE MI*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL HABILIDADES*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL EXPERIENCIA*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT0*/
sr.reveal('.contact__input',{interval: 200});