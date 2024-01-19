// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';
// ('./shoppingCart.js');

console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, quantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// ************************************
// ! BAD PRACTICE
// , {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as quantity,
// } from './shoppingCart.js';
// console.log(price);
// *************************************

// imports not a copy, its like a live connection
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
