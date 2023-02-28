import products from "./products";

const productName: string = "beanie";
let shipping: number = 5;
let taxPercent: number = 0.05;
let total: number;
const shippingAddress: string = "5th Avenue New York";

const product = products.find((product) => {
  return product.name === productName;
});

console.log(product);

if (product) {
  if (product.preOrder === true) {
    console.log(
      "Thank you for your pre-order! We'll let you know as soon as we ship your items."
    );
  }

  if (Number(product.price) >= 25) {
    shipping = 0;
  }

  if (shippingAddress.includes("New York")) {
    taxPercent = 0.1;
  }

  total = taxPercent * Number(product.price) + Number(product.price) + shipping;
  console.log(product.name, shippingAddress, shipping , product.price, taxPercent, total );
} else console.log("no product found");
