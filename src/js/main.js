import productList from "./productList.mjs";
import { loadHeaderFooter,initializeNewsletter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";
import { checkLogin } from "./auth.mjs";


var numberToDisplay = 4;
loadHeaderFooter();

productList(".product-list", "tents", numberToDisplay);
cartItemCountUpdate();
initializeNewsletter();
checkLogin();

