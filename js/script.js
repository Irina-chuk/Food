import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {modalOpen} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 300000);

    calc();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-03-30');


});





    


// showSlide(index);

// if (slide.length < 10) {
//     total.textContent = `0${slide.length}`;
// } else {
//     total.textContent = slide.length;
// }

// function showSlide(n) {
 
//     if(n > slide.length) {
//         index = 1;
//     }

//     if (n < 1) {
//         index = slide.length;
//     }

//     slide.forEach((item) => item.style.display = 'none');
//     slide[index - 1].style.display = 'block';

//     if (slide.length < 10) {
//             current.textContent =  `0${index}`;
//     } else {
//         current.textContent =  index;
//     }

// }


// function plusSlide(n) {
//     showSlide(index += n);
// }

// prev.addEventListener('click', () => {
//     plusSlide(-1);
// }); 

// next.addEventListener('click', () => {
//     plusSlide(1);
// });



//};


