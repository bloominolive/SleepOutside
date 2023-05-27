import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";


loadHeaderFooter();

productList(".product-list", "tents");
cartItemCountUpdate();

