let burgerMenu = document.querySelector('.burger-menu');
let burgerSpan = document.querySelector('.burger__span');
let burger = document.querySelector('.burger');

function addClass(evt) {
    
}

burger.addEventListener('click', function addClass(){
    burgerMenu.classList.toggle('burger__active')
    burgerSpan.classList.toggle('burger__span-active')
})
