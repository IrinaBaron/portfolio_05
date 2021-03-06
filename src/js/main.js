// burger-menu 

const burgerBtn = document.querySelector('.burger');
let bodyClass = document.querySelector('.body');

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
  // document.querySelector('.contacts__phone').classList.toggle('active');
  bodyClass.classList.toggle('lock');
})

// tabs

let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
  jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) { // 1
  trigger.addEventListener('click', function () { // 2
    // клик!
    let id = this.getAttribute('data-tab'), // 1
      content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
      activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
      activeContent = document.querySelector('.js-tab-content.active'); // 4

    activeTrigger.classList.remove('active'); // 1
    trigger.classList.add('active'); // 2

    activeContent.classList.remove('active'); // 3
    content.classList.add('active'); // 4
  });
  trigger.addEventListener('keyup', function (e) {
    if (e.code == 'Enter') {
      let id = this.getAttribute('data-tab'), // 1
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
        activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
        activeContent = document.querySelector('.js-tab-content.active'); // 4

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    }
  })
});



// accordion


let accordion = (function (element) {
  let _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    let element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {

    let _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content
    let _actionClick = function (e) {
      
      
      if (!e.target.classList.contains('accordion__item-header')) {
        return;
      }
      e.preventDefault();
      console.log(e.target);
      let header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_items, 'show');

        if (e.code == 'Enter') {
          console.log('ok')
          if (itemActive === undefined) {
            item.classList.add('show');
          } else {
            itemActive.classList.remove('show');
  
            if (itemActive !== item) {
  
              item.classList.add('show');
            }
          }
        }

      if (itemActive === undefined) {
        item.classList.add('show');
      } else {
        itemActive.classList.remove('show');

        if (itemActive !== item) {

          item.classList.add('show');
        }
      }
      

    },
      _setupListeners = function () {

        _mainElement.addEventListener('click', _actionClick);
        _mainElement.addEventListener('keyup', _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion__item');
        _setupListeners();
      }
    }
  }
})();

let accordion1 = accordion();
accordion1.init('#accordion');



// const searchBtn = document.querySelector('.search__btn');

// searchBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.header__search').classList.toggle('active');
//   document.querySelector('body').classList.toggle('lock');
// })

// const searchClose = document.querySelector('.search__span');
// searchClose.addEventListener('click', function () {
//   document.querySelector('.header__search').classList.remove('active')
//   document.querySelector('body').classList.toggle('lock');
// })
// about



//form__input

const nameDiv = document.querySelector('.wrap-name');
const surnameDiv = document.querySelector('.wrap-surname');
const emailDiv = document.querySelector('.wrap-email');
const divWrap = document.querySelector('.form__wrap');

let input = document.querySelector('.contacts__input');
let nameInput = document.querySelector('.name');
let surnameInput = document.querySelector('.surname');
let emailInput = document.querySelector('.email');
let btn = document.querySelector('.form__btn');


let mailformat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
let simbol = /^[а-яА-ЯёЁ\s]+$/;
let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div');


btn.addEventListener('click', function (e) {
  e.preventDefault();
  let validName = validateName();
  let validEmail = validateEmail();

})


function validateName() {
  div.classList.add('validate');
  div2.classList.add('validate');
  nameDiv.append(div);
  surnameDiv.append(div2)

  if (surnameInput.value == '') {
    div2.innerHTML = 'Enter your Last Name';
    surnameInput.style.borderColor = '#FF3030';
  } else if (surnameInput.value.match(simbol)) {
    div2.innerHTML = 'Invalid format';
    surnameInput.style.borderColor = '#FF3030';
  } else if (!surnameInput.value.match(simbol)) {
    div2.innerHTML = '';
    surnameInput.style.borderColor = 'transparent';

  }
  if (nameInput.value == '') {
    div.innerHTML = 'Enter your First Name';
    nameInput.style.borderColor = '#FF3030';
  } else if (nameInput.value.match(simbol)) {
    div.innerHTML = 'Invalid format';
    nameInput.style.borderColor = '#FF3030';
  } else if (!nameInput.value.match(simbol)) {
    div.innerHTML = '';
    nameInput.style.borderColor = 'transparent';

  }

}

function validateEmail() {
  div1.classList.add('validate');
  emailDiv.append(div1);
  if (emailInput.value == '') {
    div1.innerHTML = 'Enter your email';
    emailInput.style.borderColor = '#FF3030';
  } else if (emailInput.value.match(mailformat)) {
    div1.innerHTML = '';
    emailInput.style.borderColor = 'transparent';
    return true
  } else if (!emailInput.value.match(mailformat)) {
    div1.innerHTML = 'Invalid format';
    emailInput.style.borderColor = '#FF3030';

  }

}

