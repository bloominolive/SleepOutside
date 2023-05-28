<<<<<<< HEAD
import { getLocalStorage } from "./utils.mjs";
=======
import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";
>>>>>>> origin/main

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || []; // Used  the || operator to provide a default empty array in case cartItems is undefined
  if (cartItems.length === 0) {     // To check  if cartItems is empty or undefined before calling the map method 
    return;
  }
  
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
