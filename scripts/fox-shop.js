import { likedProduct , addToLikeLists } from "../data/carts/likes.js";
import { allProducts,  savewishToStorage } from "../data/carts/likes.js";
import {carts, addToCart, saveToStorage } from "../data/carts/cart.js";
import { controllerJS } from "./utils/controller.js";
import { searchUpdate } from "./utils/search.js";
import { imageSlide } from "./utils/style.js";

imageSlide()
searchUpdate();
updateFoxPage();

export function updateFoxPage() {

  // THIS IS THE PRODUCTS HTML GENERATIONS
  let allProductsHTML = ''
  allProducts.forEach(product => {
    allProductsHTML +=
    `
      <div class="product-container">
        <div class="image-container">
          <img src="${product.image}" alt="">
        </div>
        <div class="product-details">
          <div class="text">
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${(product.priceCent/100).toFixed(2)}</div>
          </div>
        </div>
        <div class="options-container">
          <select class="drop-down  drop-down-list${product.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <div class="like-container" data-product-id="${product.id}">
            <i class="fa-regular fa-heart like" data-product-id="${product.id}"></i>
          </div>
        </div>
        <div class="button-container">
          <button class="add-to-cart" data-product-id="${product.id}">Add-to cart</button>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.product-grid').forEach(element => {
    element.innerHTML = allProductsHTML;
  });



  // THIS IS THE POPUP CART HTML GENERATION

  let likeQuantity = 0;
  document.querySelectorAll('.like').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      link.classList.toggle('toggle-like')
      addToLikeLists(productId, link)
      likedProduct.forEach(item => {
        likeQuantity += item.quantity
      });
      savewishToStorage();
      updateFoxPage();
      controllerJS();
    });
  });


  let cartquantitydisplay = 0;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
    
      carts.forEach(cartItem => {
        cartquantitydisplay += cartItem.quantity;
      });
      
      saveToStorage();
      updateFoxPage();
      controllerJS();
    });
  });


  document.querySelectorAll('.like').forEach(icon => {
    const productId = icon.dataset.productId
    likedProduct.forEach(product => {
      if (product.productId === productId) {
        icon.classList.add('toggle-like');
        icon.classList.replace('fa-regular', 'fa-solid');
      };
    });
  });

  carts.forEach(cartItem => {
    cartquantitydisplay += cartItem.quantity;
  });
  document.querySelectorAll('.cart-quantity-display').forEach(cartDisplay => {
    cartDisplay.innerHTML = cartquantitydisplay;
  });

  likedProduct.forEach(wishItem => {
    likeQuantity += wishItem.quantity;
  });
  document.querySelectorAll('.like-quantity').forEach(wishDisplay => {
    wishDisplay.innerHTML = likeQuantity;
  });
};  
