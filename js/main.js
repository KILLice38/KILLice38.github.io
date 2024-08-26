'use strict'

const { active } = require("browser-sync");

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay'),
          modal = overlay.querySelector('.modal'),
          modalTrigger = document.querySelectorAll('.btn_trigger');

    function showModalForm(modal) {
        overlay.classList.add('show');
        overlay.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide');
        modal.classList.add('show');
    };

    function closeModalForm(modal) {
        overlay.classList.remove('show');
        overlay.classList.add('hide');
        document.body.style.overflow = '';
        modal.classList.remove('show');
        modal.classList.add('hide');
    };

    modalTrigger.forEach(item => {
        item.addEventListener('click', (e) => {
            showModalForm(modal);
        });
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.getAttribute('data-close') == '') {
            closeModalForm(modal);
        }
    });



    // slider

    // staff objects

    const staffArray = [
        {name: 'Владимир Душик', jobTitle: 'Директор по кальянам', img: '../img/staff/dushik.jpg'},
        {name: 'Евгений Рубан', jobTitle: 'Технический директор', img: '../img/staff/ruban.jpg'},
        {name: 'Андрей Шапоренков', jobTitle: 'Директор по стрипухам', img: '../img/staff/shaporenkov.jpg'},
        {name: 'Андрей Шапоренков', jobTitle: 'Директор по стрипухам', img: '../img/staff/shaporenkov.jpg'},
        {name: 'Андрей Шапоренков', jobTitle: 'Директор по стрипухам', img: '../img/staff/shaporenkov.jpg'},
        {name: 'Андрей Шапоренков', jobTitle: 'Директор по стрипухам', img: '../img/staff/shaporenkov.jpg'},
    ],
          staffPlus = '<div class="staff-slider__plus"></div>';

    const leftArrow = document.querySelector('.staff-slider__left-arrow'),
          rightArrow = document.querySelector('.staff-slider__right-arrow'),
          nonActive = document.querySelectorAll('.non-active'),
          slider = document.querySelector('.staff-slider__wrapper');

    let activeSlide = 0,
        flag = true;

    function createSlide(numberOfSlide) {
        const slide = document.createElement('div');
        slide.className = 'staff-slider__slide';
        slide.innerHTML = `<div class="staff-slider__info">
            <div class="staff-slider__name">${staffArray[numberOfSlide].name}</div>
            <div class="staff-slider__job-title">${staffArray[numberOfSlide].jobTitle}</div>
            <div class="staff-slider__plus"></div>
        </div>`
        return slide;
    };

    function initSlider() {
        slider.append(createSlide(activeSlide));
        nextSlideGenerate();
        prevSlideGenerate();
    };

    function nextSlideGenerate() {
        let nextSlide = activeSlide + 1;
        if (nextSlide >= staffArray.length) nextSlide = 0;
        slider.append(createSlide(nextSlide));
    };

    function prevSlideGenerate() {
        let prevSlide = activeSlide - 1;
        if (prevSlide < 0) prevSlide = staffArray.length - 1;
        console.log(prevSlide);
        slider.prepend(createSlide(prevSlide));
    };

    initSlider();

    let slides = document.querySelectorAll('.staff-slider__slide');

    function nextSlide() {
        activeSlide++;
        if (activeSlide >= staffArray.length) activeSlide = 0;
        nextSlideGenerate();
    };

    slides.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if (i > activeSlide) {
                nextSlide();
            } else if (i < activeSlide) {
                prevSlide();
            };
        });
    });


});