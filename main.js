const burger = document.querySelector(".hamburger");
const filtrs = document.querySelector('.filtrsBurger')

var element1 = document.querySelector('body');
var element2 = document.querySelector('.navUnderHeader');
var element3 = document.querySelector('.filtrSection')
var element4 = document.querySelector('.filtr-box')


burger.onclick = function(){
    element1.classList.toggle('noScroll');
    element2.classList.toggle('displayFlex')
}

filtrs.onclick = function(){
    element3.classList.toggle('displayFlex')
    element4.classList.toggle('displayNone')
}