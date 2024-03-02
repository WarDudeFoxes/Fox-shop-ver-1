import { keyWords } from "../../data/keywords.js";
import { allProducts } from "../../data/carts/likes.js";
import { updateFoxPage } from "../fox-shop.js";

// THIS IS FOR SEARCHING PRODUCT


searchUpdate();
export function searchUpdate() {
  const searchProduct = document.querySelector('.search-product')

  document.querySelectorAll('.search-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      let searchResult = [];
  
      if(searchProduct.value.length) {
        allProducts.forEach(key => {
          let values = key.keyWord;
  
          for (let i = 0; i < values.length - 1; i++) {
            const element = values[i];
            
            if (element.toLowerCase().includes(searchProduct.value.toLowerCase())) {
              
              allProducts.forEach(element => {
                if (element.keyWord === key.keyWord) {
                  searchResult.push(element);
                };
              });
            };
          };
        });
      };
  
      let resultHtML = ''
      searchResult.forEach(element => {
        resultHtML += 
        `
          <div class="product-container">
            <div class="image-container">
              <img src="${element.image}" alt="">
            </div>
            <div class="product-details">
              <div class="text">
                <div class="product-name">${element.name}</div>
                <div class="product-price">$${(element.priceCent/100).toFixed(2)}</div>
              </div>
            </div>
            <div class="options-container">
              <select class="drop-down  drop-down-list${element.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <div class="like-container" data-product-id="${element.id}">
                <i class="fa-regular fa-heart like" data-product-id="${element.id}"></i>
              </div>
            </div>
            <div class="button-container">
              <button class="add-to-cart" data-product-id="${element.id}">Add-to cart</button>
            </div>
          </div>
        `;
      });
      document.querySelectorAll('.product-grid').forEach(element => {
        element.innerHTML = resultHtML;
      });
      document.querySelector('.search-popup').classList.add('display')
    });
  });
};  

 




// THIS IS FOR SEARCHING PRODUCT
document.querySelectorAll('.search-product').forEach(element => {
  const searchProduct = document.querySelector('.search-product')
  element.onkeyup = function() {
    document.querySelector('.search-popup').classList.remove('display')
    let searchResult = [];
    if(searchProduct.value.length) {
      searchResult = keyWords.filter(key => {
        return key.toLowerCase().includes(searchProduct.value.toLowerCase())
      });
    };
    display(searchResult);
  
    if (!searchResult.length) {
      document.querySelector('.search-popup').innerHTML = ""
      updateFoxPage();
    };
  };
  
  function display(searchResult) {
    const content = searchResult.map(result => {
      return `<li class="select-list" onclick="
      document.querySelector('.search-product').value = this.innerHTML;
      document.querySelector('.search-popup').innerHTML = '';
      " >${result}</li>`
    });
    document.querySelector('.search-popup').innerHTML = `<ul>${content.join('')}</ul>`;
  };
});