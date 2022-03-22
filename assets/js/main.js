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

/* ===== ACTIVAR Y ELIMINAR EL MENU ===== */
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

/* ===== ACCORDION ===== */
const accordionItems = document.querySelectorAll('.accordion__item');

// Selecionar cada item
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header');

    // Seleccionar cada click del header
    accordionHeader.addEventListener('click', () => {
        // Crear la variable
        const openItem = document.querySelector('.accordion-open');
        
        // Llamar a la funcion toggle item
        toggleItem(item);

        // Validar si existe la clase
        if (openItem && openItem!== item) {
            toggleItem(openItem);
        }
    })
})

// Crear una funcion tipo constante
const toggleItem = (item) => {
    // Crear la variable
    const accordionContent = item.querySelector('.accordion__content');

    // Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        // Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

/* ===== SCROLL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL SOBRE MI*/
sr.reveal('.about__img', {}); 
sr.reveal('.about__subtitle', {delay: 400}); 
sr.reveal('.about__text', {delay: 400}); 

/*SCROLL HABILIDADES*/
sr.reveal('.skills__subtitle', {}); 
sr.reveal('.skills__text', {}); 
sr.reveal('.skills__data', {interval: 200}); 
sr.reveal('.skills__img', {delay: 600});

/*SCROLL EXPERIENCIA*/
sr.reveal('.work-subtitle', {interval: 200});
sr.reveal('.work__table', {interval: 400}); 
sr.reveal('.accordion__item', {interval: 200});

/*SCROLL CONTACT0*/
sr.reveal('.contact__container', {interval: 200});
sr.reveal('.contact__input', {interval: 400});