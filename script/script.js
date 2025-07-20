const translations = {
    en: {
        place: "Hotel or destination",
        title: "Select",
        arrival: "Arrival",
        departure: "Departure",
        book: "book",
        aboutUs: "About us",
        text: "The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Istagram. We no longer want to elbow our way through crowded museums. We no longer want to view the city through the mobile lens",
        text1: "It's not about travelling. It's about discovering. Travellers are the 21st century pilgrims who seek the basic, long-lasting and human essence. The city is a canvas of emotions and experiences and culture is the invisible architecture that frames it",
        text2: "Only YOU desings a new way of travelling inspired by the local and human connection where each hotel turns into a reflection of its enviroment. Dear travellers: you've reached your destination",
        events: "Our Events",
        month: "Jul",
        events1: "Coctails & Bites",
        river: "Riverside Valencia",
        events2: "Weekend Branch",
        river1: "Riverside Malagia",
        events3: "Piano Night",
        river2: "Riverside Atocha",
        btnSend: "Send",
        career: "Careers",
        contact: "Contact us",
        reserv: "Reservation",
        invoice: "Request an invoice",
        findReserv: "Find a reservatio",
        mailPref: "Email Preference",
        news: "News",
        pressRoom: "Press Room",
        newOpening: "New Opening",
        magazine: "Magazine",
        newsletter: "Newsletter",
        contact: "Contact Us",
        name: "name",
        surname: "surname",
        city: "city",
        country: "country",
        phone: "phone",
        message: "message*"
    },
    ru: {
        place: "Отель или место назначения",
        title: "Выбрать",
        arrival: "Заезд",
        departure: "Выезд",
        book: "Забронировать",
        aboutUs: "О нас",
        text: "За последние несколько лет наши способы передвижения и путешествий изменились. Нам больше не нужны типичные фотографии, которые все наши контакты публикуют в Instagram. Нам больше не хочется проталкиваться сквозь толпы музеев. Нам больше не хочется смотреть на город через объектив мобильного устройства",
        text1: "Речь не о путешествиях. Речь об открытиях. Путешественники — это паломники XXI века, которые ищут основополагающую, непреходящую и человеческую сущность. Город — это холст эмоций и впечатлений, а культура — невидимая архитектура, которая его обрамляет",
        text2: "Только ты разработал новый способ путешествий, вдохновлённый местными и человеческими связями, где каждый отель становится отражением окружающей среды. Дорогие путешественники, вы достигли своей цели",
        events: "Наши Мероприятия",
        month: "Июля",
        events1: "Коктейли и закуски",
        river: "Riverside Валенсия",
        events2: "Выходной Бранч",
        river1: "Riverside Малага",
        events3: "Ночь фортепиано",
        river2: "Riverside Аточа",
        btnSend: "Отправить",
        career: "Вакансии",
        contact: "Наши Контакты",
        reserv: "Бронирование",
        invoice: "Запросить счет",
        findReserv: "Найти бронь",
        mailPref: "Настройки Email",
        news: "Новости",
        pressRoom: "Пресс-центр",
        newOpening: "Новые открытия",
        magazine: "Журнал",
        newsletter: "Рассылка",
        contact: "Связаться с нами",
        name: "имя*",
        surname: "фамилия*",
        city: "город",
        country: "страна",
        phone: "телефон",
        message: "сообщение*"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("langSwitch");

    function changeLanguage(lang) {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            const attr = el.getAttribute("data-i18n-attr");
            const translation = translations[lang][key];

            if (translation) {
                if (attr) {
                    el.setAttribute(attr, translation);
                } else {
                    el.textContent = translation;
                }
            }
        });

        localStorage.setItem("selectedLanguage", lang);
    }

    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    switcher.value = savedLang;
    changeLanguage(savedLang);

    switcher.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });

    const links = document.querySelectorAll(".coming-soon");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Страница в разработке");
        });
    });

    new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});
