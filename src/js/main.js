import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";


var numberToDisplay = 4;
loadHeaderFooter();

productList(".product-list", "tents", numberToDisplay);
cartItemCountUpdate();

