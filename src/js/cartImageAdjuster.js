import { getLocalStorage } from "./utils.mjs";

export function animateCart(){
  const cart = document.querySelector('.cart');
  cart.classList.add('animate');
  cart.addEventListener('animationend', () => {
    cart.classList.remove('animate');
  }, { once: true });
}

export function cartItemCountUpdate(){
  const count = getTotalItemsInCart();
  const existingCircle = document.querySelector('.number-circle');
  if (existingCircle){
    const itemCount = document.querySelector('.item-count');
    itemCount.innerText = count;
  }
  else{
    const cart = document.querySelector('.cart');

    const circleContainer = document.createElement('div');
    circleContainer.classList.add('number-circle');

    const circleNumber = document.createElement('span');
    circleNumber.classList.add('item-count');
    circleNumber.innerText = count;
    circleContainer.appendChild(circleNumber);

    cart.appendChild(circleContainer);
  }
  
}

function getTotalItemsInCart(){
  const cartItems = getLocalStorage("so-cart");
  const count = cartItems == null ? 0 : cartItems.length;
  return count;
}
cartItemCountUpdate();


