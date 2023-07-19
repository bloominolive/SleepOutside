<<<<<<< HEAD
import { loadHeaderFooter } from './utils.mjs';
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

// this is how it would look if we listen for the submit on the form
document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
=======
import checkoutProcess from "../js/checkoutprocess.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";

loadHeaderFooter();
cartItemCountUpdate();

checkoutProcess.init("so-cart", ".checkout-summary");

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();

>>>>>>> origin/main
  checkoutProcess.checkout(e.target);
});