const cart = {};
const cart2 = {"Square-Neck Jumpsuit": {
          priceInCents: 8800,
          quantity: 1,
        },
      }
const product = {
  name: "Square-Neck Jumpsuit",
  priceInCents: 8800,
  availableSizes: [ 6, 8, 10, 11, 12 ]
}


function addProductToCart(product, cart) {
  if(!cart){
    let newCart = {};
    let values = Object.values(product);
    newCart[values[0]] = {quantity: 1, priceInCents: product.priceInCents};

    console.log(newCart);
    }

    
    if(cart){
      let key = Object.keys(cart)
      if(product.name !== key){
        cart[product.name] = {quantity: 1, priceInCents: product.priceInCents}
      console.log(cart);
      }
      
      if(product.name === key){
        cart = cart[product.name.quantity]++;
        console.log(cart); 
      }
      
          }
        }

/*
If a cart is given and the product being added is already in the cart, just increase the quantity by 1.

console.log(cart); //> { "Court Sneaker": { quantity: 1, priceInCents: 8800 } }
console.log(product); //> { name: "Court Sneaker", ... }
addProductToCart(product); //> { "Court Sneaker": { quantity: 2, priceInCents: 8800 } }
 */ 

  addProductToCart(product, cart2);
