import { carts,  removeFromCart, saveToStorage} from "../data/carts/cart.js";
import { allProducts } from "../data/carts/likes.js";
import { controllerJS } from "./utils/controller.js";
import { searchUpdate } from "./utils/search.js";

controllerJS();
updateCheckout();

export function updateCheckout() {
  
  let cartItemHTML = '';
  carts.forEach(cartItem => {

    let matchingProduct;
    const productId = cartItem.productId;

    allProducts.forEach(product => {
      if (product.id === productId) {
        matchingProduct = product
      };
    });

    
    cartItemHTML += 
    `
      <div class="carted-items cart-item-container-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
        <div class="carted-item-header">
          <h2>Delivery date: Monday, May 8</h2>
        </div>

        <div class="carted-item-body">
          <div class="order-details">
            <div class="checkout-product-image">
              <img src="${matchingProduct.image}">
            </div>

            <div class="checkout-product-details">
              <div class="checkout-product-name">${matchingProduct.name}</div>
              <div class="checkout-product-price">$${(matchingProduct.priceCent/100).toFixed(2)}</div>
              <div class="checkout-quantity-update-div">
                <div class="checkout-quantity-update">
                <span>Quantity:</span>
                  <span class="quantity-display quantity-display-${matchingProduct.id}">${cartItem.quantity}</span>
                  <input class="update-quantity display input-link-${matchingProduct.id}">
                  <span class="save display save-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">Save</span>
                  <span class="update update-link-${productId}" data-product-id="${matchingProduct.id}">Update</span> 
                  <span class="delete delete-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">Delete</span>
                </div>
              </div>
            </div>
          </div>
          <div class="delivery-options-container">
            <div class="delivery-option-header">
              <h3>Choose a delivery option:</h3>
            </div>

            <div class="delivery-options-body">
              
              <div class="delivery-option1">
                <input type="radio" name="1">
                <div class="date-shipping-type">
                  <div>Monday, May 8</div>
                  <div>Free Shipping</div>
                </div>
              </div>

              <div class="delivery-option1">
                <input type="radio" name="1">
                <div class="date-shipping-type">
                  <div>Monday, May 3</div>
                  <div>$4.99 - Shipping</div>
                </div>
              </div>

              <div class="delivery-option1">
                <input type="radio" name="1">
                <div class="date-shipping-type">
                  <div>Monday, May 1</div>
                  <div>$9.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  document.querySelectorAll('.carted-item-container').forEach(element => {
    element.innerHTML = cartItemHTML;
  })


  document.querySelectorAll('.update').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      
      document.querySelector(`.update-link-${productId}`).classList.add('display');
      document.querySelector(`.save-link-${productId}`).classList.remove('display');
      document.querySelector(`.input-link-${productId}`).classList.remove('display');
    });
  });

  document.querySelectorAll('.save').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      let inputValue =  document.querySelector(`.input-link-${productId}`).value;

      document.querySelector(`.update-link-${productId}`).classList.remove('display');
      document.querySelector(`.save-link-${productId}`).classList.toggle('display');
      document.querySelector(`.input-link-${productId}`).classList.add('display');

      updateCheckout();
    });
  });


  document.querySelectorAll('.delete').forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(`.cart-item-container-${productId}`);
      container.remove();
      saveToStorage();
      updateCheckout();
      controllerJS();
    });
  });


  document.querySelector('.bars-menu').addEventListener('click', () => {
    document.querySelector('.popup-menu').classList.toggle('display');
    document.querySelector('.left-section').firstElementChild.classList.toggle ("fa-times");
  });

  document.querySelectorAll('.order-summary, .checkout-body, .checkout-header').forEach(parent => {
    parent.addEventListener('click', () => {
      document.querySelector('.left-section').firstElementChild.classList.replace("fa-times", "fa-bars");
      document.querySelector('.popup-menu').classList.add('display');
    });
  });


  let cartquantitydisplay = 0;
  carts.forEach(cartItem => {
    cartquantitydisplay += cartItem.quantity;
  });
  document.querySelectorAll('.cart-quantity-display').forEach(display => {
    display.innerHTML = cartquantitydisplay;
  });
};