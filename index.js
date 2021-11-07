var hamburger = document.querySelector('.hamburger');
var mainMenu = document.querySelector('.menu-items');
var closeMenu = document.querySelector('.closeMenu');


hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', cancel)
     


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function cancel(){
    mainMenu.style.top = '-100%';
}