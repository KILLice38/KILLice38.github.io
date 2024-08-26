'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay'),
          modal = overlay.querySelector('.modal'),
          modalTrigger = document.querySelectorAll('.btn_trigger');

    function showModalForm(modal) {
        overlay.classList.add('show')
        document.body.style.overflow = 'hidden';
        modal.classList.add('show');
    };

    function closeModalForm(modal) {
        overlay.classList.remove('show');
        document.body.style.overflow = '';
        modal.classList.remove('show');
        if (modal.querySelector('._service')) modal.querySelector('._service').remove();
    };

    function addServiceInput(service) {
        const input = document.createElement('input');
        input.setAttribute('name', 'service');
        input.setAttribute('type', 'text');
        input.classList.add('modal__input', '_service');
        input.setAttribute('placeholder', 'Заказанная услуга');
        input.value = service;
        modal.querySelector('.modal-form').insertBefore(input, modal.querySelector('button'));
    };

    modalTrigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('services-order__btn')) {
                addServiceInput(item.parentElement.querySelector('.services-order__subtitle').textContent);
            }
            showModalForm(modal);
        });
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.getAttribute('data-close') == '') {
            closeModalForm(modal);
        }
    });


    // advantages

    const advantagesDescriptionArray = [
        'Наша лаборатория комплексно подходит к обеспечению всех необходимых услуг и оборудования для проведения исследований в области коррозии. Мы предлагаем полный спектр услуг, начиная от начального анализа и заканчивая предоставлением детальных отчетов. Это позволяет нашим клиентам получать все необходимые результаты в одном месте, экономя время и ресурсы.',
        'Высокая квалификация наших специалистов гарантирует качественное проведение исследований. Наши сотрудники имеют многолетний опыт работы в области коррозии и регулярно проходят обучение и сертификацию. Это обеспечивает высокую точность и надежность наших исследований, а также соответствие международным стандартам.',
        'Собственная методика анализа позволяет достигать высокой точности результатов. Мы разработали уникальные методики, которые адаптированы под специфические требования наших клиентов. Это включает использование новейших технологий и инструментов, что позволяет нам проводить исследования на самом высоком уровне.',
        'Используем только высококачественное оборудование для исследований. Наши лаборатории оснащены современными приборами, которые регулярно проходят калибровку и техническое обслуживание. Это позволяет нам обеспечивать высокую точность и надежность результатов, а также минимизировать погрешности в измерениях.',
        'Ценим свою репутацию и всегда стремимся к лучшим результатам. Мы осознаем важность доверия наших клиентов и постоянно работаем над улучшением качества наших услуг. Наша репутация – это наш главный капитал, и мы делаем все возможное, чтобы ее сохранить и укрепить.',
        'Клиентоориентированность является ключевым принципом нашей работы. Мы всегда учитываем потребности и ожидания наших клиентов, предоставляя индивидуальные решения и поддерживая высокий уровень обслуживания. Наша цель – не просто удовлетворить, а превзойти ожидания наших клиентов.'
    ],
          advantages = document.querySelectorAll('.advantages__item'),
          advantagesDescription = document.querySelector('.advantages__description');

    advantages.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            for (let index = 0; index < advantages.length; index++) {
                advantages[index].classList.remove('active');
            }
            item.classList.add('active');

            advantagesDescription.classList.remove('visible');
            setTimeout(() => {
                advantagesDescription.textContent = advantagesDescriptionArray[i];
                advantagesDescription.classList.add('visible');
            }, 500 );
            
        });
    });

    // staff-new

    const staffArray = [
        {img: 'img/staff/andreev.jpg', name: 'Николай Николаевич Андреев', job: 'Г.н.с., профессор, доктор химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/marshakov.jpg', name: 'Андрей Игоревич Маршаков', job: 'Г.н.с., профессор, доктор химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/kuznecov.jpg', name: 'Юрий Игоревич Кузнецов', job: 'Г.н.с., профессор, доктор химических наук', description: 'Доктор химических наук с 1985 года, профессор по специальности «Химическое сопротивление материалов и защита от коррозии» с 5 мая 1991 года. Юрий Игоревич Кузнецов является выдающимся ученым в области физической химии и защиты металлов от коррозии, последователем школы Г. В. Акимова. Он занимается фундаментальными исследованиями процессов коррозии и пассивации металлов, природы взаимодействия органических соединений и ионов с поверхностью металлов. Им разработаны эффективные ингибиторы коррозии и оригинальные методы получения конверсионных покрытий на металлах. Результаты его научной деятельности используются для решения важных прикладных задач в области защиты от коррозии.'},
        {img: 'img/staff/question.png', name: 'Ольга Александровна Гончарова', job: 'В.н.с., доктор химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/avdeev.jpg', name: 'Ярослав Геннадьевич Авдеев', job: 'Г.н.с., профессор, доктор химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/kuzenkov.jpg', name: 'Юрий Александрович Кузенков', job: 'В.н.с., кандидат химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/polyakov.jpg', name: 'Николай Анатольевич Поляков', job: 'Доцент, кандидат химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/dushik.jpg', name: 'Владимир Владимирович Душик', job: 'В.н.с., кандидат химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/question.png', name: 'Андрей Юрьевич Лучкин', job: 'С.н.с., кандидат химических наук', description: 'Описание сотрудника'},
        {img: 'img/staff/chirkunov.jpg', name: 'Александр Александрович Чиркунов', job: 'Кандидат химических наук', description: 'Описание сотрудника'}
    ];

    const sliderWrapper = document.querySelector('.staff-slider__wrapper');
    const staffDescription = document.querySelector('.staff-description');
    const staffName = staffDescription.querySelector('.staff-description__name');
    const staffText = staffDescription.querySelector('.staff-description__text');

    function createSlide({img, name, job}, i) {
        const slide = document.createElement('div');
        slide.classList.add('staff-slider__item', `staff-slider__item_${i + 1}`);
        slide.innerHTML = `
            <img src="${img}" alt="photo of employee" class="staff-slider__img">
            <div class="staff-slider__text">
                <h4 class="staff-slider__subtitle">${name}</h4>
                <p class="staff-slider__description">${job}</p>
            </div>`;
        return slide;
    }

    function updateDescription(index) {
        const { img, name, description } = staffArray[index];
        staffName.textContent = name;
        staffText.textContent = description;

        const existingImage = document.querySelector('.staff-slider-description__image img');
        if (existingImage) {
            existingImage.src = img;
        } else {
            const descriptionImg = document.createElement('div');
            descriptionImg.classList.add('staff-slider__item', 'staff-slider-description__image');
            descriptionImg.innerHTML = `<img src="${img}" alt="photo of employee" class="staff-slider__img">`;
            document.querySelector('.staff__wrapper').prepend(descriptionImg);
        }
    }

    function setActiveSlide(index) {
        const currentActive = sliderWrapper.querySelector('.staff-slider__item.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        slides[index].classList.add('active');
        updateDescription(index);
    }

    const slides = staffArray.map((staff, i) => createSlide(staff, i));
    sliderWrapper.append(...slides);

    const initialIndex = window.screen.width <= 767 ? 0 : 2;
    setActiveSlide(initialIndex);

    sliderWrapper.addEventListener('click', (e) => {
        const clickedSlide = e.target.closest('.staff-slider__item');
        if (clickedSlide) {
            const index = slides.indexOf(clickedSlide);
            if (index !== -1) {
                setActiveSlide(index);
            }
        }
    });


    // animation shifting

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });


    const appearance = document.querySelectorAll('[data-animate = "appearance"]');

    if (window.screen.width >= 767) {
        appearance.forEach(item => {
            observer.observe(item);
        })
    } else {
        appearance.forEach(item => {
            item.classList.add('visible');
        })
    }

    

    // form

    const forms = document.querySelectorAll('.form');

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            formSend(e, item)
        });
    });

    async function formSend(e, form) {
        e.preventDefault();

        let error = validateForm(form);

        let formData = new FormData(form);

        if (error === 0) {
            // добавляем загрузку
            // form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                console.log(result);
            };
            // } else {
                
            // };
        }
        
    };

    function validateForm(form) {
        let error = 0;
        let requiredInputs = form.querySelectorAll('._req');

        for (let i = 0; i < requiredInputs.length; i++) {
            const input = requiredInputs[i];
            removeFormError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    addFormError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                addFormError(input);
                error++;
            } else {
                if (input.value === '') {
                    addFormError(input);
                    error++;
                }
            }
        }
        return error;
    };

    function addFormError(input) {
        input.classList.add('_error');
        input.parentElement.classList.add('_error');
    };

    function removeFormError(input) {
        input.classList.remove('_error');
        input.parentElement.classList.remove('_error');
    };

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    };


});