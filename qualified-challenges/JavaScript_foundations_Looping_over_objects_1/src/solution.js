/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

cart = {
  "Canvas Tote Bag": { quantity: 2, priceInCents: 1800 },
  "Black and White Chuck On Dress": { quantity: 1, priceInCents: 4400 },
  "Natural Straw Wide Brim Hat": { quantity: 1, priceInCents: 2250 },
  "Blue Stripe Casual Shirt": { quantity: 3, priceInCents: 2000 },
};

function calculateCartTotal(cart) {
  let totalPrice = 0;
  for (let items in cart){
    const item = cart[items];
    const price = item.priceInCents * item.quantity;
    totalPrice = totalPrice + price;
  }
  return totalPrice;
}

function printCartInventory(cart) {
  let result = [];
  const items = Object.keys(cart);
  const amount = Object.values(cart);
for(let i = 0; i < items.length; i++){
  result.push(`${amount[i].quantity}x${items[i]}n`)
}
result = result.join('');
return result;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};

printCartInventory(cart);
