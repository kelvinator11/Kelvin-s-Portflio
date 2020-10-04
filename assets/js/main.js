/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:1500
});

let srleft = ScrollReveal({
  origin: "bottom",
  distance: "80px",
    duration: 1500,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{delay:150}); 
sr.reveal('.button',{delay: 300}); 
sr.reveal('.home__img',{delay: 780}); 
sr.reveal('.home__social-icon',{ delay: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__container', { delay: 400 });
sr.reveal(".about_image", { delay: 400 }); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.p-box',{interval: 250}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




