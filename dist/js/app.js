"use strict";var burgerBtn=document.querySelector(".burger"),bodyClass=document.querySelector(".body");burgerBtn.addEventListener("click",(function(){burgerBtn.classList.toggle("active"),document.querySelector(".nav").classList.toggle("active"),bodyClass.classList.toggle("lock")}));var jsTriggers=document.querySelectorAll(".js-tab-trigger"),jsContents=document.querySelectorAll(".js-tab-content");jsTriggers.forEach((function(e){e.addEventListener("click",(function(){var t=this.getAttribute("data-tab"),a=document.querySelector('.js-tab-content[data-tab="'+t+'"]'),n=document.querySelector(".js-tab-trigger.active"),r=document.querySelector(".js-tab-content.active");n.classList.remove("active"),e.classList.add("active"),r.classList.remove("active"),a.classList.add("active")}))}));var accordion=function(){var e={},t={},a=function(e){if(e.target.classList.contains("accordion__item-header")){e.preventDefault();var a=e.target.parentElement,n=function(e,t){var a=void 0;return e.forEach((function(e){e.classList.contains(t)&&(a=e)})),a}(t,"show");void 0===n?a.classList.add("show"):(n.classList.remove("show"),n!==a&&a.classList.add("show"))}};return{init:function(n){e="string"==typeof n?document.querySelector(n):n,t=e.querySelectorAll(".accordion__item"),e.addEventListener("click",a)}}},accordion1=accordion();accordion1.init("#accordion");var nameDiv=document.querySelector(".wrap-name"),surnameDiv=document.querySelector(".wrap-surname"),emailDiv=document.querySelector(".wrap-email"),divWrap=document.querySelector(".form__wrap"),input=document.querySelector(".contacts__input"),nameInput=document.querySelector(".name"),surnameInput=document.querySelector(".surname"),emailInput=document.querySelector(".email"),btn=document.querySelector(".form__btn"),mailformat=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,simbol=/^[а-яА-ЯёЁ\s]+$/,div=document.createElement("div"),div1=document.createElement("div"),div2=document.createElement("div");function validateName(){div.classList.add("validate"),div2.classList.add("validate"),nameDiv.append(div),surnameDiv.append(div2),""==surnameInput.value?(div2.innerHTML="Enter your Last Name",surnameInput.style.borderColor="#FF3030"):surnameInput.value.match(simbol)?(div2.innerHTML="Invalid format",surnameInput.style.borderColor="#FF3030"):surnameInput.value.match(simbol)||(div2.innerHTML="",surnameInput.style.borderColor="transparent"),""==nameInput.value?(div.innerHTML="Enter your First Name",nameInput.style.borderColor="#FF3030"):nameInput.value.match(simbol)?(div.innerHTML="Invalid format",nameInput.style.borderColor="#FF3030"):nameInput.value.match(simbol)||(div.innerHTML="",nameInput.style.borderColor="transparent")}function validateEmail(){if(div1.classList.add("validate"),emailDiv.append(div1),""==emailInput.value)div1.innerHTML="Enter your email",emailInput.style.borderColor="#FF3030";else{if(emailInput.value.match(mailformat))return div1.innerHTML="",emailInput.style.borderColor="transparent",!0;emailInput.value.match(mailformat)||(div1.innerHTML="Invalid format",emailInput.style.borderColor="#FF3030")}}btn.addEventListener("click",(function(e){e.preventDefault();validateName(),validateEmail()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJvZHlDbGFzcyIsImpzVHJpZ2dlcnMiLCJmb3JFYWNoIiwicXVlcnlTZWxlY3RvckFsbCIsImpzQ29udGVudHMiLCJ0cmlnZ2VyIiwiaWQiLCJ0aGlzIiwiZ2V0QXR0cmlidXRlIiwiY29udGVudCIsImFjdGl2ZVRyaWdnZXIiLCJhY3RpdmVDb250ZW50IiwicmVtb3ZlIiwiYWRkIiwiYWNjb3JkaW9uIiwiX21haW5FbGVtZW50IiwiX2l0ZW1zIiwiX2FjdGlvbkNsaWNrIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJpdGVtIiwicGFyZW50RWxlbWVudCIsIml0ZW1BY3RpdmUiLCJfZ2V0SXRlbSIsImVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImFjY29yZGlvbjEiLCJpbml0IiwibmFtZURpdiIsInN1cm5hbWVEaXYiLCJkaXZXcmFwIiwiaW5wdXQiLCJuYW1lSW5wdXQiLCJzdXJuYW1lSW5wdXQiLCJlbWFpbElucHV0Iiwic2ltYm9sIiwiZGl2IiwiZGl2MSIsImNyZWF0ZUVsZW1lbnQiLCJkaXYyIiwidmFsaWRhdGVOYW1lIiwidmFsdWUiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwibWF0Y2giLCJ2YWxpZGF0ZUVtYWlsIiwibWFpbGZvcm1hdCIsImJ0biJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBQUEsVUFBQUMsU0FBQUMsY0FBQSxXQUVNRixVQUFZQyxTQUFTQyxjQUFjLFNBR3pDRixVQUFVRyxpQkFBaUIsU0FBUyxXQUNsQ0gsVUFBVUksVUFBVUMsT0FBTyxVQUMzQkosU0FBU0MsY0FBYyxRQUFRRSxVQUFVQyxPQUFPLFVBRWhEQyxVQUFVRixVQUFVQyxPQUFPLFdBUTdCRSxJQUFBQSxXQUFXQyxTQUFRQyxp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Q2pCVixDQUFBQSxHQUFBQSxXQUFpQlUsTUFBQUEsTUFBY0csWUFIL0IsT0FLRFYsS0FBQUssVUFBQSxHQUVGUixXQUFBUyxNQUFBQyxZQUFBLGVBUFUsRUFDR1YsV0FBV08sTUFBTUksTUFBTUUsY0FDakNWLEtBQUtLLFVBQVksaUJBQ2pCUixXQUFXUyxNQUFNQyxZQUFjLFlBaERqQ0ksSUFBQXRELGlCQUFpQm9ELFNBQUFBLFNBQWpCL0IsR0FIRkEsRUFBQUcsaUJBRWtCc0IsZUFNVEEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJ1cmdlci1tZW51IFxuXG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG5sZXQgYm9keUNsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcblxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzX19waG9uZScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBib2R5Q2xhc3MuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xufSlcblxuLy8gdGFic1xuXG5sZXQganNUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10YWItdHJpZ2dlcicpLFxuICBqc0NvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRhYi1jb250ZW50Jyk7XG5cbmpzVHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikgeyAvLyAxXG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IC8vIDJcbiAgICAvLyDQutC70LjQuiFcbiAgICBsZXQgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSwgLy8gMVxuICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWItY29udGVudFtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKSwgLy8gMlxuICAgICAgYWN0aXZlVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWItdHJpZ2dlci5hY3RpdmUnKSwgLy8gM1xuICAgICAgYWN0aXZlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWItY29udGVudC5hY3RpdmUnKTsgLy8gNFxuXG4gICAgYWN0aXZlVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgLy8gMVxuICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IC8vIDJcblxuICAgIGFjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IC8vIDNcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAvLyA0XG4gIH0pO1xufSk7XG5cblxuLy8gYWNjb3JkaW9uXG5cblxubGV0IGFjY29yZGlvbiA9IChmdW5jdGlvbiAoZWxlbWVudCkge1xuICBsZXQgX2dldEl0ZW0gPSBmdW5jdGlvbiAoZWxlbWVudHMsIGNsYXNzTmFtZSkgeyAvLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINGN0LvQtdC80LXQvdGC0LAg0YEg0YPQutCw0LfQsNC90L3Ri9C8INC60LvQsNGB0YHQvtC8XG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudCA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IF9tYWluRWxlbWVudCA9IHt9LCAvLyAuYWNjb3JkaW9uXG4gICAgICBfaXRlbXMgPSB7fSwgLy8gLmFjY29yZGlvbi1pdGVtXG4gICAgICBfY29udGVudHMgPSB7fTsgLy8gLmFjY29yZGlvbi1pdGVtLWNvbnRlbnRcbiAgICBsZXQgX2FjdGlvbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRpb25fX2l0ZW0taGVhZGVyJykpIHsgLy8g0L/RgNC10LrRgNCw0YnQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTRg9C90LrRhtC40Lgg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdC1INC/0L4g0LfQsNCz0L7Qu9C+0LLQutGDXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8g0L7RgtC80LXQvdGP0Lwg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQtNC10LnRgdGC0LLQuNC1XG4gICAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INC90LXQvtCx0YXQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1XG4gICAgICBsZXQgaGVhZGVyID0gZS50YXJnZXQsXG4gICAgICAgIGl0ZW0gPSBoZWFkZXIucGFyZW50RWxlbWVudCxcbiAgICAgICAgaXRlbUFjdGl2ZSA9IF9nZXRJdGVtKF9pdGVtcywgJ3Nob3cnKTtcbiAgICAgIGlmIChpdGVtQWN0aXZlID09PSB1bmRlZmluZWQpIHsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgc2hvdyDQuiDRjdC70LXQvNC10L3RgtGDICjQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0LfQsNCz0L7Qu9C+0LLQutCwKVxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgc2hvdyDRgyDRgtC60YPRidC10LPQviDRjdC70LXQvNC10L3RgtCwXG4gICAgICAgIGl0ZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAvLyDQtdGB0LvQuCDRgdC70LXQtNGD0Y7RidCw0Y8g0LLQutC70LDQtNC60LAg0L3QtSDRgNCw0LLQvdCwINCw0LrRgtC40LLQvdC+0LlcbiAgICAgICAgaWYgKGl0ZW1BY3RpdmUgIT09IGl0ZW0pIHtcbiAgICAgICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBzaG93INC6INGN0LvQtdC80LXQvdGC0YMgKNCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHRgNCw0L3QvdC+0LPQviDQt9Cw0LPQvtC70L7QstC60LApXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIF9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vINC00L7QsdCw0LLQuNC8INC6INGN0LvQtdC80LXQvdGC0YMg0LDQutC60L7RgNC00LjQvtC90LAg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8gY2xpY2tcbiAgICAgIF9tYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9hY3Rpb25DbGljayk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBfbWFpbkVsZW1lbnQgPSAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQpO1xuICAgICAgICBfaXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faXRlbScpO1xuICAgICAgICBfc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKCk7XG5cbmxldCBhY2NvcmRpb24xID0gYWNjb3JkaW9uKCk7XG5hY2NvcmRpb24xLmluaXQoJyNhY2NvcmRpb24nKTtcblxuXG5cbi8vIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2J0bicpO1xuXG4vLyBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xuLy8gfSlcblxuLy8gY29uc3Qgc2VhcmNoQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19zcGFuJyk7XG4vLyBzZWFyY2hDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2xvY2snKTtcbi8vIH0pXG4vLyBhYm91dFxuXG5cblxuLy9mb3JtX19pbnB1dFxuXG5jb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAtbmFtZScpO1xuY29uc3Qgc3VybmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwLXN1cm5hbWUnKTtcbmNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAtZW1haWwnKTtcbmNvbnN0IGRpdldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fd3JhcCcpO1xuXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2lucHV0Jyk7XG5sZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbmxldCBzdXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VybmFtZScpO1xubGV0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwnKTtcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnRuJyk7XG5cblxubGV0IG1haWxmb3JtYXQgPSAvXlxcdysoWy0rLiddXFx3KykqQFxcdysoWy0uXVxcdyspKlxcLlxcdysoWy0uXVxcdyspKiQvO1xubGV0IHNpbWJvbCA9IC9eW9CwLdGP0JAt0K/RkdCBXFxzXSskLztcbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHZhbGlkTmFtZSA9IHZhbGlkYXRlTmFtZSgpO1xuICBsZXQgdmFsaWRFbWFpbCA9IHZhbGlkYXRlRW1haWwoKTtcbiAgXG59KVxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTmFtZSgpIHtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRlJyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGUnKTtcbiAgbmFtZURpdi5hcHBlbmQoZGl2KTtcbiAgc3VybmFtZURpdi5hcHBlbmQoZGl2MilcbiAgXG4gIGlmIChzdXJuYW1lSW5wdXQudmFsdWUgPT0gJycpIHtcbiAgICBkaXYyLmlubmVySFRNTCA9ICdFbnRlciB5b3VyIExhc3QgTmFtZSc7XG4gICAgc3VybmFtZUlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuICB9IGVsc2UgaWYgKHN1cm5hbWVJbnB1dC52YWx1ZS5tYXRjaChzaW1ib2wpKSB7XG4gICAgZGl2Mi5pbm5lckhUTUwgPSAnSW52YWxpZCBmb3JtYXQnO1xuICAgIHN1cm5hbWVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjRkYzMDMwJztcbiAgfSBlbHNlIGlmICghc3VybmFtZUlucHV0LnZhbHVlLm1hdGNoKHNpbWJvbCkpIHtcbiAgICBkaXYyLmlubmVySFRNTCA9ICcnO1xuICAgIHN1cm5hbWVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgXG4gIH1cbiAgaWYgKG5hbWVJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgIGRpdi5pbm5lckhUTUwgPSAnRW50ZXIgeW91ciBGaXJzdCBOYW1lJztcbiAgICBuYW1lSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGMzAzMCc7XG4gIH0gZWxzZSBpZiAobmFtZUlucHV0LnZhbHVlLm1hdGNoKHNpbWJvbCkpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gJ0ludmFsaWQgZm9ybWF0JztcbiAgICBuYW1lSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGMzAzMCc7XG4gIH0gZWxzZSBpZiAoIW5hbWVJbnB1dC52YWx1ZS5tYXRjaChzaW1ib2wpKSB7XG4gICAgZGl2LmlubmVySFRNTCA9ICcnO1xuICAgIG5hbWVJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgXG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoKSB7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgndmFsaWRhdGUnKTtcbiAgZW1haWxEaXYuYXBwZW5kKGRpdjEpO1xuICBpZiAoZW1haWxJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgIGRpdjEuaW5uZXJIVE1MID0gJ0VudGVyIHlvdXIgZW1haWwnO1xuICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI0ZGMzAzMCc7XG4gIH0gZWxzZSBpZiAoZW1haWxJbnB1dC52YWx1ZS5tYXRjaChtYWlsZm9ybWF0KSkge1xuICAgIGRpdjEuaW5uZXJIVE1MID0gJyc7XG4gICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmICghZW1haWxJbnB1dC52YWx1ZS5tYXRjaChtYWlsZm9ybWF0KSkge1xuICAgIGRpdjEuaW5uZXJIVE1MID0gJ0ludmFsaWQgZm9ybWF0JztcbiAgICBlbWFpbElucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNGRjMwMzAnO1xuXG4gIH1cblxufVxuXG4iXX0=
