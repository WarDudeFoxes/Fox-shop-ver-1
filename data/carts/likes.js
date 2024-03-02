import { funitureProducts } from "../products/funitureproducts.js";
import { clotheProducts } from "../products/clotheProducts.js";
import { costumeProducts } from "../products/cosmeticeProducts.js";
import { electronicProducts } from "../products/electronicProduct.js";
import { bookProducts } from "../products/bookProducts.js";


export let allProducts = [...clotheProducts, ...funitureProducts, ...electronicProducts, ...costumeProducts,...bookProducts];

export let likedProduct = JSON.parse(localStorage.getItem('wishlist')) || [{
  productId: "mnbxaxASCwnhsvwjsvxcsg",
  quantity: 1,
},{
  productId: "mnbxapiyutuwfg",
  quantity: 1
}];


export function addToLikeLists(productId, link) {

  let matchingitem;
  likedProduct.forEach(product => {
    if (product.productId === productId) {
      matchingitem = product;
    };
  });

  if (matchingitem) {
    matchingitem.quantity --;
    removerfromWishlist(productId);
  } else {
    likedProduct.push({
      productId,
      quantity: 1
    });
  };

  let matchingproduct;
  likedProduct.forEach(item => {
    const productId = item.productId;

    allProducts.forEach(product => {
      if (product.id === productId) {
        matchingproduct = product;
      };
    });
  });
};

export function removerfromWishlist(productId) {
  let newWishlist = [];
  likedProduct.forEach(likeItem => {
    if (productId !== likeItem.productId) {
      newWishlist.push(likeItem);
    };
  });
  likedProduct = newWishlist;
};

export function removeAllWish() {
  let newWish = [];
  likedProduct = newWish;
};

export function savewishToStorage() {
  localStorage.setItem('wishlist', JSON.stringify(likedProduct));
};