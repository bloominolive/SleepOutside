import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";

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
      src="${item.Images}"
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
loadHeaderFooter();
cartItemCountUpdate();









//keeping this in the file in case the merged code doesn't work

// import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
// import { cartItemCountUpdate } from "./cartImageAdjuster.js";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || []; // Used  the || operator to provide a default empty array in case cartItems is undefined
//   if (cartItems.length === 0) {     // To check  if cartItems is empty or undefined before calling the map method 
//     return;
//   }
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//     <a href="#" class="cart-card__image">
//       <img src="${item.Images.PrimaryMedium}" alt="${item.Name}" />
//     </a>
//     <a href="#">
//       <h2 class="card__name">${item.Name}</h2>
//       <p class="cart-card__price">$${item.ListPrice}</p>
//     </a>
//     <div id="quantityElement" class="quantity-element">
//       <button class="minus-button">-</button>
//       <span id="quantityDisplay" class="quantity-display">${item.Quantity}</span>
//       <button class="plus-button">+</button>
//     </div>
//   </li>`;

//   return newItem;
// }

// renderCartContents();
// loadHeaderFooter();
// cartItemCountUpdate();
