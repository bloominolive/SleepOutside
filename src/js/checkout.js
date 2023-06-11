import checkoutProcess from "../js/checkoutprocess.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";

loadHeaderFooter();
cartItemCountUpdate();

checkoutProcess.init("so-cart", ".checkout-summary");

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();

  checkoutProcess.checkout(e.target);
});