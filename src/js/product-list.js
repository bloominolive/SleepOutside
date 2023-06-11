import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";


let category = getParam('category') ?? 'tents';

document.querySelector('.page-title').textContent = `Top Products: ${category}`;
productList(category, '.product-list');
cartItemCountUpdate();