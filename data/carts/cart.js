export let carts = JSON.parse(localStorage.getItem('carts')) || [{
  productId: "mnbxaxASCwnhsvwjsvxcsg",
  quantity: 1
},{
  productId: "mnbxapiyutuwfg",
  quantity: 1
}];

export function addToCart(productId) {

  const selector = document.querySelector(`.drop-down-list${productId}`);
  let matchingproduct;
  carts.forEach(cartProduct => {
    if (cartProduct.productId === productId) {
      matchingproduct = cartProduct
    };
  });
    
  if (matchingproduct) {
    matchingproduct.quantity += Number(selector.value)
  } else {
    carts.push({
      productId,
      quantity: Number(selector.value)
    });
  };

  saveToStorage();
};

export function removeFromCart(productId) {
  let newCart = [];
  carts.forEach(cartItem => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    };
  });
  carts = newCart;
};

export function removeAllCart() {
  let newCart = [];
  carts = newCart;
};


export function saveToStorage() {
  localStorage.setItem('carts', JSON.stringify(carts));
};