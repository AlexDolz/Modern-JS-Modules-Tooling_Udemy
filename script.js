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

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// ! NOT VERY CLEAN
// lastPost.then(last => console.log(last));

// *************************************
(async () => {
  const lastPost2 = await getLastPost();
  console.log(lastPost2);
})();

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);

// ******************* CommonJS modules *****************************

// Export
// export.addToCart =  function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// Import
// const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },

    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

// Deep clone in npm
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

// Now working without modules, when converting on ES5 for example
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name} `);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find'
// import 'core-js/stable/promise'

// Polifilling async functions
import 'regenerator-runtime/runtime';
