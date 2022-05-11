'use strict';

// const btn = document.getElementsByName('button');
// const section = document.querySelectorAll('.section');
// const body = document.body;
const closeBtn = document.querySelector('#closebtn');
const burgerNav = document.querySelector('.burger');
const navLinks = document.querySelector('.nav--links');
const burgLinks = document.querySelector('.burger--links');
const menuBtn = document.querySelector('#btn-discover-menu');
const menuPage = document.querySelector('#section--2');
// const homeGallery = document.querySelector('.home--gallery');
const scrollBtn = document.querySelector('.scroll-top');
const homePage = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn-scroll-top');
const aboutImages = document.querySelector('.about--images');
const aboutImg = document.querySelectorAll('.about--image');
const icons = document.querySelectorAll('.icon');
const iconsContainer = document.querySelector('.menu-icons-container');
const menuItems = document.querySelectorAll('.menu--items');

//////////////////////////////////////////
// PAGE NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(ancor => {
    ancor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});


// NAVBAR
const iconToggling = function(){
    const menuIcon = closeBtn.children;
    for(let i=0; i < menuIcon.length; i++){
    menuIcon[i].classList.toggle('active');
    }
};

closeBtn.addEventListener('click', function(){
    // Иконка-бургер трансформируется в ❌
    iconToggling();

    // Ссылки - в столбик (убирется их hidden class)
    navLinks.classList.toggle('hidden');

    // НЕпрозрачный background на весь экран
    burgerNav.classList.toggle('active');

});

// При клике ссылки в выпадающем меню navbar обратно превращается в полоску с бургером (и соответственно, переход к нужному разделу)
burgLinks.addEventListener('click', function(){
        
    navLinks.classList.add('hidden');
    burgerNav.classList.remove('active');

    iconToggling();
});

// const link = burgLinks.children;
// link.addEventListener('click', function(){
//  if(link.clicked){
//         burgerNav.classList.remove('active');
//         navLinks.classList.add('hidden');
//     }
// })
// burgLinks.addEventListener('click', function(){
//     const link = burgLinks.closest('.nav--link');
//     link.forEach(function(){
//         if(link.clicked) {
//             burgerNav.classList.toggle('active');
//             navLinks.classList.toggle('hidden');
        
//         }
//     })
// })

////////////////////////////////////////
// POPPING SCROLL BUTTON
const homeHeight = homePage.getBoundingClientRect().height;
// console.log(homeHeight);

const poppingBtn = function(entries) {
    const [entry] = entries;
    // console.log(entry);

    if(!entry.isIntersecting) scrollBtn.classList.remove('btn-hidden');
    else scrollBtn.classList.add('btn-hidden');
}

const headerObserver = new IntersectionObserver(poppingBtn, {
    root:null,
    threshold:0,
    rootMargin: `${homeHeight/2.5}px`,
});
headerObserver.observe(homePage);

////////////////////////////////////////
// REFACTORING NEEDED😁
// Smooth scrolling

// btn.addEventListener('click',function(e){
//     e.preventDefault();

//     const mpCoords = menuPage.getBoundingClientRect();
//     const hpCoords = homePage.getBoundingClientRect();

//     menuPage.scrollIntoView({behavior:'smooth'})
//     homePage.scrollIntoView({behavior: "smooth"});
// });

// const smoothScroll = function(e){
//     e.preventDefault();

//     const coords = `${e.target.getAttribute('href')}`.getBoundingClientRect();
//     coords.scrollIntoView({behavior: 'smooth'})

//     // document.querySelector(pageId).scrollIntoView({behavior: 'smooth'});
// }

// menuBtn.addEventListener('click', smoothScroll());
menuBtn.addEventListener('click', function (e){
    e.preventDefault();

const mpCoords = menuPage.getBoundingClientRect();
// console.log(mpCoords);

// это более современный способ (в строке ниже), чем rootElement.scrollTo({top: 0,behavior:"smooth"}) в функции для btnScrollTo
menuPage.scrollIntoView({behavior:'smooth'})
});

// Button scrolling
// btnScrollTo.addEventListener('click', smoothScroll());
btnScrollTo.addEventListener('click', function(e){
e.preventDefault();

const hpCoords = homePage.getBoundingClientRect();
// console.log(hpCoords);

homePage.scrollIntoView({behavior: "smooth"});

const rootElement = document.documentElement;

rootElement.scrollTo({
    top: 0,
    behavior:"smooth"
    })
});


////////////////////////////////////////
// ABOUT: images hovering
// aboutImages.addEventListener('mouseenter', function (e) {
//  if (!e)return;

//  aboutImg.forEach(i => i.setAttribute('src', 'images/cheese_pancakes_2.jpg'))
// });

// aboutImages.addEventListener('mouseleave', function(e){
//     if (!e)return;

//     aboutImg.forEach(i => i.setAttribute('src', 'images/honey_cake_1.jpg'))
// })


////////////////////////////////////////
// Switching content in MENU
iconsContainer.addEventListener('click', function(e) {
const clicked = e.target.closest('.icon');
console.log(clicked);

if(!clicked) return;

// icons.classList.toggle('.activated');
icons.forEach(i => i.classList.remove('.activated'));
menuItems.forEach(m => m.classList.remove('.menu--items_visible'));

clicked.classList.add('.activated');

console.log(clicked.dataset.tab);

document.querySelector(`.menu--items--${clicked.dataset.tab}`).classList.add('.menu--items_visible');

// clicked.classList.toggle('.activated');
// const menuItems = document.querySelectorAll('.menu--items');

// menuItems.forEach(m => m.classList.toggle('.visible'));
});








// function addMap() {
//     const restaurant = { lat: 19.3949702, lng: -99.1697945 };
//     const map = new google.maps.Map(document.getElementsByClassName('.map'), {
//         zoom: 4,
//         center: restaurant,
//     });
//     const marker = new google.maps.Marker({
//         position: restaurant,
//         map: map,
//     });
// };