import { bookProducts } from "../../data/products/bookProducts.js";
import { clotheProducts } from "../../data/products/clotheProducts.js";
import { costumeProducts } from "../../data/products/cosmeticeProducts.js";
import { electronicProducts } from "../../data/products/electronicProduct.js";
import { funitureProducts } from "../../data/products/funitureproducts.js";
import {carts, addToCart, saveToStorage }  from "../data/carts/cart.js";



// document.querySelector('.electronics').addEventListener('click', () => {
//   document.querySelector('.product-grid').innerHTML = electronicHTML;
//   document.querySelector('.electronics').style.color = 'pink';
//   document.querySelectorAll('.clothes, .books, .cosmetics, .funitures, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//     updateFoxPage()
//   });
// });

// const cart = []
// let electronicsHTML = ''
// electronicProducts.forEach(product => {
//   electronicsHTML +=
//   `
//     <div class="product-container">
//       <div class="image-container">
//         <img src="${product.image}" alt="">
//       </div>
//       <div class="product-details">
//         <div class="text">
//           <div class="product-name">${product.name}</div>
//           <div class="product-price">$${(product.priceCent/100).toFixed(2)}</div>
//         </div>
//       </div>
//       <div class="options-container">
//         <select class="drop-down  drop-down-list${product.id}">
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//         </select>
//         <div class="like-container">
//           <i class="fa-regular fa-heart like" data-product-id="${product.id}"></i>
//         </div>
//       </div>
//       <div class="button-container">
//         <button class="cartbtn" data-product-id="${product.id}">Add-to cart</button>
//       </div>
//     </div>
//   `;
// });

// document.querySelector('.electronics').addEventListener('click', () => {
//   document.querySelector('.electronics').style.color = 'pink';
//   document.querySelectorAll('.clothes, .books, .cosmetics, .funitures, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//     document.querySelector('.product-grid').innerHTML = electronicsHTML 
//   });
// });


// let cartquantitydisplay = 0;
// document.querySelectorAll('.cartbtn').forEach(button => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.productId
      
//     const selector = document.querySelector(`.drop-down-list${productId}`);
//     let matchingproduct;
//     cart.forEach(cartProduct => {
//       if (cartProduct.productId === productId) {
//         matchingproduct = cartProduct
//       };
//     });
      
//     if (matchingproduct) {
//       matchingproduct.quantity += Number(selector.value)
//     } else {
//       cart.push({
//         productId,
//         quantity: Number(selector.value)
//       });
//     };

  
//     cart.forEach(cartItem => {
//       cartquantitydisplay += cartItem.quantity
//     })
//     console.log(productId)
//   })
// });


// document.querySelector('.cosmetics').addEventListener('click', () => {
//   document.querySelector('.cosmetics').style.color = 'pink';
//   document.querySelectorAll('.clothes, .books, .electronics, .funitures, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//     updateFoxPage()
//   });
// });

// document.querySelector('.clothes').addEventListener('click', () => {
//   document.querySelector('.clothes').style.color = 'pink';
//   document.querySelectorAll('.cosmetics, .books, .electronics, .funitures, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//   });
// });

// document.querySelector('.books').addEventListener('click', () => {
//   document.querySelector('.books').style.color = 'pink';
//   document.querySelectorAll('.clothes, .cosmetics, .electronics, .funitures, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//   });
// });

// document.querySelector('.funitures').addEventListener('click', () => {
//   document.querySelector('.funitures').style.color = 'pink';
//   document.querySelectorAll('.clothes, .books, .electronics, .cosmetics, .all-products').forEach(Element => {
//     Element.style.color = ' rgba(0, 0, 0, 0.421)'
//   });
// });


window.addEventListener('scroll', () => {
  if(window.scrollY >  document.querySelector('.product-categories').offsetTop - document.querySelector('.page-navbar').offsetHeight -100) {
    document.querySelector('.page-navbar').classList.add('display');
    document.querySelector('.page-navbar2').classList.remove('display');
  } else {
    document.querySelector('.page-navbar').classList.remove('display');
    document.querySelector('.page-navbar2').classList.add('display');
  };
});   




  // document.querySelector('.all-products').addEventListener('click', () => {
  //   document.querySelector('.all-products').style.color = 'pink';
  //   document.querySelectorAll('.clothes, .books, .electronics, .funitures, .cosmetics').forEach(Element => {
  //     Element.style.color = ' rgba(0, 0, 0, 0.421)'
  //   });
  //   document.querySelector('.product-grid').innerHTML = allProductsHTML
  // });

  // const productContainer = document.querySelector('.product-container')
  // const productName = productContainer.getElementsByClassName('product-name')
  // console.log(productName[0].innerHTML);



  
  searchItem()
function searchItem() {
  const searchValue = document.querySelector('.search-product').value.toLowerCase()
  const productGrid = document.querySelector('.product-grid')
  const productContainer = document.querySelector('.product-container')
  const productName = productGrid.getElementsByTagName('span')
  console.log('bhfvghc');

  for (let i = 0; i < productName.length; i++) {
    let match = productContainer[i].getElementsByTagName('span')[0];
    
    if (match) {
      let inputValue = match.textContent || match.innerHTML

      if (inputValue.toLowerCase().indexOf(searchValue) > -1) {
        productContainer[i].style.display = "";
      } else {
        productContainer[i].style.display = none;
      }
    }
  }
}




  // THIS IS FOR SEARCHING PRODUCT
  const searchProduct = document.querySelector('.search-product');
  searchProduct.onkeyup = function() {

    let searchResult = [];
    if(searchProduct.value.length) {
      searchResult = keyWords.filter(key => {
        return key.toLowerCase().includes(searchProduct.value.toLowerCase())
      });
    };
    display(searchResult);

    if (!searchResult.length) {
      document.querySelector('.search-popup').innerHTML = ""
    };
  };

  function display(searchResult) {
    const content = searchResult.map(result => {
      return `<li class="select-list" onclick="
      document.querySelector('.search-product').value = this.innerHTML
      document.querySelector('.search-popup').innerHTML = ''
      " >${result}</li>`
    });
    document.querySelector('.search-popup').innerHTML = `<ul>${content.join('')}</ul>`;
  };
