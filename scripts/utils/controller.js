import { likedProduct, allProducts, removeAllWish , removerfromWishlist, savewishToStorage} from "../../data/carts/likes.js";
import { removeAllCart, removeFromCart, saveToStorage, carts } from "../../data/carts/cart.js";
import { updateFoxPage } from "../fox-shop.js";
import { updateCheckout } from "../checkout.js";
import {keyWords} from "../../data/keywords.js";

controllerJS();
export function controllerJS() {

  let homePageWishlistHTML = '';
  likedProduct.forEach(element => {
    let matchingItem;
    const productId = element.productId
    allProducts.forEach(product => {
      if (productId === product.id) {
        matchingItem = product
      };
    });

    homePageWishlistHTML += 
    `
      <div class="wishlist-product-container">
        <img src="${matchingItem.image}" alt="">
        <div class="wishlist-product-details">
          <div class="wishlist-product-name">${matchingItem.name}</div>
          <div class="wishlist-product-price">$${(matchingItem.priceCent/100).toFixed(2)}</div>
        </div>
        <i class="fa-solid fa-times delete-wish" data-product-id="${matchingItem.id}"></i>
      </div>
    `;
  });
  document.querySelectorAll('.wishlist-container').forEach(element => {
    element.innerHTML =  homePageWishlistHTML;
    const noWishlist = 
    ` <div class="no-cart-container">
        <h4 class="no-cart">Wishlist is empthy</h4>
      </div>
    `;
    if (!element.innerHTML) {
      element.innerHTML = noWishlist;
    };
  });


  let homePageCartHTML = '';
  carts.forEach(cartItem => {
    let matchingProduct;
    const productId = cartItem.productId;

    allProducts.forEach(product => {
      if (product.id === productId) {
        matchingProduct = product
      };
    });

    homePageCartHTML += 
    `
      <div class="products-container products-container-${productId}">
        <img src="${matchingProduct.image}" alt="">
        <div class="products-detail">
          <span class="products-name">${matchingProduct.name}</span>
          <div class="products-price"><span>${cartItem.quantity}</span> x $${(matchingProduct.priceCent/100).toFixed(2)}</div>
        </div>
        <i class="fa-solid fa-times delete-cart" data-product-id="${matchingProduct.id}"></i>
      </div>
    `;
  });
  document.querySelectorAll('.cart-pop-up').forEach(element => {
    element.innerHTML = homePageCartHTML;
    const noCart = 
    ` <div class="no-cart-container">
        <h4 class="no-cart">Cart is empthy</h4>
      </div>
    `;
    if (!element.innerHTML) {
      element.innerHTML = noCart;
    };
  });



  document.querySelectorAll('.wishlist-link').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      document.querySelector('.cart-popup-container').classList.add('display');
      document.querySelector('.wishlist-popup-container').classList.remove('display');
      document.querySelectorAll('.popup-menu').forEach(element => {
        element.classList.add('display');
        document.querySelector('.left-section').firstElementChild.classList.replace("fa-times", "fa-bars");
      });
    });
  });


  document.querySelectorAll('.checkout-link').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      document.querySelector('.cart-popup-container').classList.remove('display');
      document.querySelector('.wishlist-popup-container').classList.add('display');
      document.querySelectorAll('.popup-menu').forEach(element => {
        element.classList.add('display');
      });
      document.querySelector('.left-section').firstElementChild.classList.replace("fa-times", "fa-bars");
    });
  });

  document.querySelectorAll('.advertisement-section, .product-categories, .product-grid, .checkout-body, .header2, .login-full-content, .bars-menu, .middle-section').forEach(Element => {
    Element.addEventListener('mouseover', () => {
      document.querySelector('.cart-popup-container').classList.add('display');
      document.querySelector('.wishlist-popup-container').classList.add('display');
    });
  });

  document.querySelectorAll('.product-grid, .product-categories, .advertisement-section, .search-form, .login-full-content, .header2, .right-section, .middle-section').forEach(parent => {
    parent.addEventListener('click', () => {
      document.querySelector('.left-section').firstElementChild.classList.replace("fa-times", "fa-bars");
      document.querySelector('.popup-menu').classList.add('display');
    });
  });


  document.querySelectorAll('.bars-menu').forEach(icon => {
    icon.addEventListener('click', () => {
      document.querySelector('.popup-menu').classList.toggle('display');
      document.querySelector('.left-section').firstElementChild.classList.toggle ("fa-times");
    });
  });


  document.querySelectorAll('.clear-carts').forEach(button => {
    button.addEventListener('click', () => {
      removeAllCart();
      saveToStorage();
      updateFoxPage();
      controllerJS();
      updateCheckout();
    });
  });

  document.querySelectorAll('.clear-wishlist').forEach(button => {
    button.addEventListener('click', () => {
      removeAllWish();
      updateFoxPage();
      savewishToStorage();
      controllerJS();
      updateCheckout();
    });
  });


  document.querySelectorAll('.delete-cart').forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(`.products-container-${productId}`);
      container.remove();
      saveToStorage();
      updateFoxPage();
      updateCheckout()
      controllerJS();
    });
  });


  document.querySelectorAll('.delete-wish').forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.dataset.productId;
      removerfromWishlist(productId);
      savewishToStorage();
      updateFoxPage();
      controllerJS();
    });
  });

  

//   // THIS IS FOR SEARCHING PRODUCT
//   const searchProduct = document.querySelector('.search-product');

//   searchProduct.onkeyup = function() {

//     let searchResult = [];
//     if(searchProduct.value.length) {
//       searchResult = keyWords.filter(key => {
//         return key.toLowerCase().includes(searchProduct.value.toLowerCase())
//       });
//     };
//     display(searchResult);

//     if (!searchResult.length) {
//       document.querySelector('.search-popup').innerHTML = ""
//     };
//   };

//   function display(searchResult) {
//     const content = searchResult.map(result => {
//       return `<li class="select-list" onclick="
//       document.querySelector('.search-product').value = this.innerHTML
//       document.querySelector('.search-popup').innerHTML = ''
      
//       document.querySelectorAll('.product-grid').forEach(element => {
//         element.innerHTML = this.innerHTML;
//       });

//       " >${result}</li>`
//     });
//     document.querySelector('.search-popup').innerHTML = `<ul>${content.join('')}</ul>`;
//   };
};