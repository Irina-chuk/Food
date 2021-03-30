function modalOpen (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //отменяем прокрутку
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}

function closeModal (modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal (triggerSelector, modalSelector, modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    modalCloseBtn = document.querySelector('[data-close]');

    

    modalTrigger.forEach(btn => { //навешиваем событие - открыть мод окно на несколько кнопок
    btn.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
    });

    

    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') === '') { //если событие произошло на modal или на крестике
        closeModal(modalSelector);
    }
    });

    document.addEventListener('keydown', (e) => {  //закрытие модального окна клавишей esс
    if (e.code === 'Escape' && modal.classList.contains('show')) { // проверяем что клавиша esc и модальное
        //открыто
        closeModal(modalSelector);
    }
    });

    

    function modalShowByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //сравниваем сумму высоты прокрученной высоты + видимой части сайта >=  высоте прокрутки
        modalOpen(modalSelector, modalTimerId);
        window.removeEventListener('scroll', modalShowByScroll);
    }
    }

    window.addEventListener('scroll', modalShowByScroll);




}

export default modal;
export {modalOpen};
export {closeModal};