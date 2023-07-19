<<<<<<< HEAD
import { setLocalStorage, getLocalStorage } from './utils.mjs';
import { findProductById } from './externalServices.mjs';
=======
import { findProductById } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
>>>>>>> origin/main
import {animateCart, cartItemCountUpdate} from "./cartImageAdjuster.js";

export default async function productDetails(productId){
  const productData = await findProductById(productId)
  renderProductDetails(productData)
}

<<<<<<< HEAD
function renderProductDetails(productData){
  document.querySelector('title').textContent = `Sleep Outside | ${productData.Name}`
  document.getElementById('brand-name').textContent = productData.Brand.Name
  document.getElementById('product-name').textContent = productData.Name
  
  const productImage = document.getElementById('product-image')
  productImage.setAttribute('src', `${productData.Images.PrimaryLarge}`)
  productImage.setAttribute('alt', productData.Name)
  
  document.getElementById('compare-at-price').textContent = `$${productData.SuggestedRetailPrice}`  
  document.getElementById('product-price').textContent = `$${productData.FinalPrice}`
  document.getElementById('product-color').textContent = productData.Colors.ColorName
  document.getElementById('product-description').innerHTML = productData.DescriptionHtmlSimple

  document.getElementById('addToCart').setAttribute('data-id', productData.Id)  
}

function addProductToCart(product) {
  // First get previous cart and then add new
  let cart = getLocalStorage('so-cart');
  if (cart == null){
    cart = [];
  }
  cart.push(product);
  setLocalStorage('so-cart', cart);
=======
export function addToCart(product) {
  product.Quantity = 1;
  const cartItems = getLocalStorage("so-cart") || [];
  const existingProduct = cartItems.find(item => item.Id === product.Id);

  if (existingProduct) {
    product.Quantity += existingProduct.Quantity;
    cartItems.splice(cartItems.findIndex(item => item.Id === product.Id), 1);
  } 

  cartItems.push(product);

  setLocalStorage("so-cart", cartItems);
  animateCart();
  cartItemCountUpdate();
}



function renderProductDetails(product) {
    document.querySelector("#productName").innerText = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText =
      product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Images.PrimaryLarge;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText =
      product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML =
      product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = product.Id;
>>>>>>> origin/main
}
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id)
  addProductToCart(product)
  
  // update the backpack superscript count on add to cart
  const cartItemCount = document.getElementById('item-count')
  cartItemCount.textContent = Number(cartItemCount.textContent) + 1
}
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler)