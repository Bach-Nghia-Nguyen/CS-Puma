let shoppingCart = [
  { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
  { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
  { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
  { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
  { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
  { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
  { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];

/**
 * Write a function that returns an array of prices
 * for each product in the cart (item price * quantity).
 */
function totalPriceOfEachItem(itemArray) {
  return itemArray.map((item) => item.price * item.quantity);
}
let priceArray = totalPriceOfEachItem(shoppingCart);
// console.log(priceArray);

/**
 * Write a function that returns the total price.
 */
function totalPriceOfCart() {
  return priceArray.reduce((accumulate, currentPrice) => {
    return accumulate + currentPrice;
  }, 0);
}
// console.log(totalPriceOfCart());

/**
 * Write a function called removeItemsFromCart(productId, quantity)
 * that will remove the quantity number of item with the productId
 * in the cart and return the result in a new array. If the quantity
 *  after removing is 0, remove the product out of the cart.
 */
function removeItemsFromCart(productId, quantity) {
  // check validity of input
  if (!productId || quantity < 0) return "Invalid";

  // find the target item that matches with productId
  let targetItem = shoppingCart.find((item) => item.id === productId);
  if (targetItem == undefined) return "Item not found";

  // let itemPosition = shoppingCart.indexOf(targetItem);

  // subtract the quantity and update the item
  let updatedItemQuantity = targetItem.quantity - quantity;
  targetItem.quantity = updatedItemQuantity;

  // if quantity of an item <= 0, filter that item
  // out of the cart, update the cart
  shoppingCart = shoppingCart.filter((item) => item.quantity > 0);
  return shoppingCart;
}

// console.log(removeItemsFromCart("A31", 3));
// console.log(shoppingCart);

/**
 * Write a function called addItemToCart(product, quantity)
 * that will add new products into the cart if there is no
 * product like this, or increase the quantity if the cart
 * already contains that kind of product. The result will be
 * returned in a new array.
 */
let newProduct = {
  id: "A38",
  item: "Black Hat",
  price: 9.9,
};
function addItemsToCart(product, quantity) {
  // check validity of input
  if (!product || quantity < 0) return "Invalid";

  // find the target item that matches with input
  let targetItem = shoppingCart.find(
    (item) => item.id === product.id || item.id === product
  );

  if (targetItem == undefined) {
    // if the product doesn't exist in the cart, add it
    product.quantity = quantity;
    shoppingCart.push(product);
  } else {
    // if the product is already in the cart, just add and update it
    let updatedItemQuantity = targetItem.quantity + quantity;
    targetItem.quantity = updatedItemQuantity;
  }

  return shoppingCart;
}
console.log(addItemsToCart("A34", 7));
console.log(shoppingCart);
