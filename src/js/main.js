// burger-menu 

const burgerBtn = document.querySelector('.header__burger')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('active');
  document.querySelector('.contacts__phone').classList.toggle('active')
  // document.querySelector('body').classList.toggle('lock');
})

const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__search').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
})

const searchClose = document.querySelector('.search__span');
searchClose.addEventListener('click', function () {
  document.querySelector('.header__search').classList.remove('active')
  document.querySelector('body').classList.toggle('lock');
})
// about

// form__map
let closeInfo = document.querySelector('.contacts__close');

closeInfo.addEventListener('click', function () {
  document.querySelector('.contacts__info.active').classList.remove('active');
})

//form__input

const nameDiv = document.querySelector('.contacts__form-text');
const emailDiv = document.querySelector('.contacts__form-email');

let input = document.querySelector('.contacts__input');
let nameInput = document.querySelector('.name');
let emailInput = document.querySelector('.email');
let btn = document.querySelector('.contacts__form-btn');
let aboutBtn = document.querySelector('.form__btn');
let aboutInput = document.querySelector('.form__text');

let mailformat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
let simbol = /^[а-яА-ЯёЁ\s]+$/;
let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div');


btn.addEventListener('click', function (e) {
  e.preventDefault();
  let validName = validateName();
  let validEmail = validateEmail();
  // if(!validName && !validEmail) {
  //   return
  // }
})

aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();

  div2.classList.add('validate');
  document.querySelector('.about__form').append(div2);
  if (aboutInput.value == '') {
    div2.innerHTML = 'Введите email';
    aboutInput.style.borderColor = '#F06666';
  } else if (aboutInput.value.match(mailformat)) {
    div2.innerHTML = '';
    aboutInput.style.borderColor = 'transparent';
    // return true
  } else if (!aboutInput.value.match(mailformat)) {
    div2.innerHTML = 'Недопустимый формат';
    aboutInput.style.borderColor = '#F06666';
  }
})

function validateName() {
  div.classList.add('validate');
  nameDiv.append(div);
  if (nameInput.value == '') {
    div.innerHTML = 'Введите имя';
    nameInput.style.borderColor = '#FF3030';
  } else if (!nameInput.value.match(simbol)) {
    div.innerHTML = 'Недопустимый формат';
    nameInput.style.borderColor = '#FF3030';
  } else if (nameInput.value.match(simbol)) {
    div.innerHTML = '';
    nameInput.style.borderColor = 'transparent';
    return true
  }

}
function validateEmail() {
  div1.classList.add('validate');
  emailDiv.append(div1);
  if (emailInput.value == '') {
    div1.innerHTML = 'Введите email';
    emailInput.style.borderColor = '#FF3030';
  } else if (emailInput.value.match(mailformat)) {
    div1.innerHTML = '';
    emailInput.style.borderColor = 'transparent';
    return true
  } else if (!emailInput.value.match(mailformat)) {
    div1.innerHTML = 'Недопустимый формат';
    emailInput.style.borderColor = '#FF3030';

  }

}



// map 
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76662778054577, 37.631113380653034],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,


  });
  var myPlacemark = new ymaps.Placemark([55.76907353849188, 37.638780623031614], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/ellipse2.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');

};