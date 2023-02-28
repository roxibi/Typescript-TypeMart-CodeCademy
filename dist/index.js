"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
const product = products_1.default.filter(product => {
    if (product.name === productName) {
        if (product.preOrder === true) {
            console.log("Thank you for your pre-order! We'll let you know as soon as we ship your items.");
        }
    }
});
