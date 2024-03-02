import { updateCheckout } from "./checkout.js";
import { updateFoxPage } from "./fox-shop.js";
import { controllerJS } from "./utils/controller.js"; 


updateCheckout();
updateFoxPage();
controllerJS();

document.querySelectorAll('.drop-down-icon').forEach(element => {
  element.addEventListener('mouseover', () => {
    document.querySelector('.product-categories-list').classList.remove('display');
    document.querySelector('.product-categories-drop-down i').classList.replace("fa-chevron-down", "fa-chevron-up");
  });
});

document.querySelectorAll('.login-full-content, .hide, .page-navbar').forEach(element => {
  element.addEventListener('mouseover', () => {
    document.querySelector('.product-categories-list').classList.add('display');
    document.querySelector('.product-categories-drop-down i').classList.replace("fa-chevron-up", "fa-chevron-down");
  });  
});
