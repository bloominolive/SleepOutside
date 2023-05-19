import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { cartItemCountUpdate } from "./cartImageAdjuster.js";


async function main() {
    await loadHeaderFooter();
    productList(".product-list", "tents");
    cartItemCountUpdate();
  }
  
  main().catch((error) => {
    console.error(error);
  });
