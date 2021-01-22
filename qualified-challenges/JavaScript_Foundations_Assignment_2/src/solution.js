/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  
  }

function addProductToCart(product, cart = {}) {
  if (product)
}

const cart = {
  "Square-Neck Jumpsuit": {
    priceInCents: 8800,
    quantity: 1,
  },
  "Relaxed Silk Shirt": {
    priceInCents: 9800,
    quantity: 2,
  },
};

function calculateTotal(cart) {
  if(cart.length === 0) return 0;
           
  let total = 0;
  for(let items in cart){
    const item = cart[items];
    const price = item.priceInCents;
    const amount = item.quantity;
    total += (price * amount);
  }
  return total;

  }



function printReceipt(cart) {
  if(cart = {}) return null;
  let result = [];
  const cartTotal = calculateTotal(cart);
  const newTotal = printablePrice(cartTotal);
  const items = Object.keys(cart);
  const amount = Object.values(cart);
  for(let i = 0; i < items.length; i++){
    let cost = amount[i].priceInCents * amount[i].quantity;
    let price = printablePrice(cost);
    result.push(`${amount[i].quantity}x${items[i]} - ${price}`);
  }
result.push(`Total: ${newTotal}`);
  const newResult = result.join("\\n");
  console.log(newResult);
}


module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
