(()=>{"use strict";var e=document.querySelector(".profile__title"),t=document.querySelector(".profile__subtitle"),n=document.querySelector(".profile__avatar"),o=document.querySelector(".edit-form"),r=document.querySelector(".edit-avatar-form"),c=document.querySelector(".edit-form__input-text-name"),a=document.querySelector(".edit-form__input-text-job"),i=document.querySelector(".add-card-form"),u=document.querySelector(".add-card-form__input-text-card-name"),l=document.querySelector(".add-card-form__input-text-link"),s=document.querySelector(".edit-avatar-form__input-text-link"),d=Array.from(document.querySelectorAll(".edit-form__button")),f=Array.from(document.querySelectorAll(".popup__close-button")),m=document.querySelector(".profile__edit-button"),p=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__avatar-wrapper"),h=document.querySelector(".popup_edit-form"),v=document.querySelector(".popup_add-card-form"),y=document.querySelector(".popup_image"),S=document.querySelector(".popup_edit-avatar"),q=Array.from(document.querySelectorAll(".popup")),b=document.querySelector(".template").content,k=document.querySelector(".popup__image"),E=document.querySelector(".popup__title"),C=document.querySelector(".elements"),g=function(e){"Escape"===e.key&&L(document.querySelector(".popup_opened"))};function x(e){e.classList.add("popup_opened"),window.addEventListener("keydown",g)}function L(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",g)}function j(e){d.forEach((function(t){e?(t.textContent="Сохранить",t.disabled=!1):(t.textContent="Сохранение...",t.disabled=!0)}))}q.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&L(e)}))}));var A={baseUrl:"https://nomoreparties.co/v1/plus-cohort-18",headers:{authorization:"73a65b3f-f1cb-4973-9fdd-42c64f95341a","Content-Type":"application/json"}},P=function(e){return fetch(e,{headers:A.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))};function U(t,n,o,r,c){var a=b.querySelector(".element").cloneNode(!0),i=a.querySelector(".element__like"),u=a.querySelector(".element__trash"),l=a.querySelector(".element__image"),s=a.querySelector(".element__like-number");return a.querySelector(".element__title").textContent=t,l.alt=t,l.src=n,c.filter((function(t){return t.name===e.textContent})).length>0&&i.classList.add("element__like_active"),i.addEventListener("click",(function(e){e.target.classList.contains("element__like_active")?(e.target.classList.remove("element__like_active"),function(e){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:A.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(r).then((function(e){s.textContent=e.likes.length})).catch((function(e){console.log(e)}))):(e.target.classList.add("element__like_active"),function(e){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:A.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(r).then((function(e){s.textContent=e.likes.length})).catch((function(e){console.log(e)})))})),s.textContent=c.length,"5fd43d4214a884362d7366eb"===o?u.addEventListener("click",(function(e){e.preventDefault(),function(e){return fetch("".concat(A.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:A.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(r).then((function(){e.target.closest(".element").remove()})).catch((function(e){console.log(e)}))})):u.style.display="none",l.addEventListener("click",(function(){k.src=n,E.textContent=t,k.alt=t,x(y)})),a}function w(e){C.prepend(e)}var T=function(e,t,n){var o=t.querySelector(n.submitButtonSelector);e?(o.classList.add(n.inactiveButtonClass),o.disabled=!0):(o.classList.remove(n.inactiveButtonClass),o.disabled=!1)},D=function(e){return e.some((function(e){return!e.validity.valid}))},B=function(e,t,n){t.classList.add(".".concat(t.id,"-error")),e.querySelector(".".concat(t.id,"-error")).textContent=n},M=function(e,t,n){t.classList.remove(n.inputErrorClass),e.querySelector(".".concat(t.id,"-error")).textContent=""},N={formElement:".edit-form",inputElement:".edit-form__input-text",submitButtonSelector:".edit-form__button",inactiveButtonClass:"edit-form__button_disabled",inputErrorClass:"edit-form__input-text_type_error",errorClass:".edit-form__input-error"};P("".concat(A.baseUrl,"/users/me")).then((function(o){e.textContent=o.name,t.textContent=o.about,n.src=o.avatar})).catch((function(e){console.log(e)})),P("".concat(A.baseUrl,"/cards")).then((function(e){!function(e){e.forEach((function(e){w(U(e.name,e.link,e.owner._id,e._id,e.likes))}))}(e)})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formElement)).forEach((function(t){Array.from(t.querySelectorAll(e.inputElement)).forEach((function(n){!function(e,t,n){var o=Array.from(e.querySelectorAll(n.inputElement));t.addEventListener("input",(function(){!function(e,t,n,o){t.validity.patternMismatch?t.setCustomValidity(n):t.setCustomValidity(""),t.validity.valid?M(e,t,o):B(e,t,t.validationMessage)}(e,t,t.dataset.errorMessage,n),T(D(o),e,n)}))}(t,n,e)}))}))}(N),o.addEventListener("submit",(function(n){n.preventDefault(),j(!1),e.textContent=c.value,t.textContent=a.value,fetch("".concat(A.baseUrl,"/users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:e.textContent,about:t.textContent})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(n){e.textContent=n.name,t.textContent=n.about,L(h),j(!0)})).catch((function(e){console.log(e),j(!0)}))})),r.addEventListener("submit",(function(e){e.preventDefault(),j(!1),n.src=s.value,fetch("".concat(A.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:n.src})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){n.src=t.avatar,L(S),T(!0,r,N),e.target.reset(),j(!0)})).catch((function(e){console.log(e),j(!0)}))})),i.addEventListener("submit",(function(e){e.preventDefault(),j(!1),fetch("".concat(A.baseUrl,"/cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:u.value,link:l.value})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){w(U(t.name,t.link,t.owner._id,t._id,t.likes)),L(v),e.target.reset(),j(!0),T(!0,v,N)})).catch((function(e){console.log(e),j(!0)}))})),f.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){L(t)}))})),m.addEventListener("click",(function(){c.value=e.textContent,a.value=t.textContent,x(h);var n=Array.from(o.querySelectorAll(".edit-form__input-text"));n.forEach((function(e){!function(e,t,n){""===t.value?B(e,t,t.validationMessage):M(e,t,n)}(o,e,N),T(D(n),h,N)}))})),p.addEventListener("click",(function(){x(v)})),_.addEventListener("click",(function(){x(S)}))})();