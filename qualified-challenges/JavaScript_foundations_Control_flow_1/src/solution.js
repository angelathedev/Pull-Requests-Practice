/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below.
function checkSize(product, size) {
  return (product.availableSizes.includes(size)) ? ("We have that size.") : ("We do not have that size.");
}

// Use a switch statement below.
function newYorkCitySalesPrice(product, city) {
  let tax;
switch(city){
  case "Amherst":
  case "Cheektowaga":
  case "Buffalo":
    tax = 1.0875;
    break;
  case "Brooklyn":
  case "Jamaica":
  case "New York City":
  case "Staten Island":
  case "Yonkers":
    tax = 1.08875;
    break;
  case "Hempstead":
    tax = 1.08625;
    break;
  case "Mount Vernon":
  case "White Plains":
    tax = 1.08375;
    break;
  default:
    tax = 1.08;
}

return product.priceInCents * tax;
}
module.exports = {
  checkSize,
  newYorkCitySalesPrice,
};
