import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { animateCart } from "./cartImageAdjuster.js";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";

export default async function productDetails(productId) {
  const product = await findProductById(productId);
  renderProductDetails(product);
  document
    .getElementById("addToCart")
    .addEventListener("click", () => addToCart(product));
}

function addToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
  animateCart();
  cartItemCountUpdate();
}

function renderProductDetails(product) {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
