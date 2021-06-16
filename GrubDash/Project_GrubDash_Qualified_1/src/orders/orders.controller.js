const { networkInterfaces } = require("os");
const path = require("path");

// Use the existing order data
const orders = require(path.resolve("src/data/orders-data"));

// Use this function to assigh ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /orders handlers needed to make the tests pass
function list(req, res){
    res.json({data: orders})
}

function deliverToPropertyExists(req, res, next){
    const {data: {deliverTo} = {}} = req.body;
    if(deliverTo){
        return next()
    }

    next({
        status: 400,
        message: 'Order must include a deliverTo'
    })
}

function deliverToPropertyEmpty(req, res, next){
    const {data: {deliverTo} = {}} = req.body;
    if(deliverTo === ""){
        next({
            status: 400,
            message: 'Order must include a deliverTo'
        })
    }
    return next();
}

function mobileNumberPropertyExists(req, res, next){
    const {data: {mobileNumber} = {}} = req.body
    if(mobileNumber){
        return next();
    }
    next({
        status: 400,
        message: "Order must include a mobileNumber"
    })
}

function mobileNumberPropertyEmpty(req, res, next){
    const {data: {mobileNumber} = {}} = req.body
    if(mobileNumber === ""){
    next({
        status: 400,
        message: "Order must include a mobileNumber"
    })
}
    return next();
}

function dishesPropertyExists(req, res, next){
    const {data: {dishes} = {}} = req.body
    if(dishes){
        return next();
    }
    next({
        status: 400,
        message: "Order must include a dish"
    })
}

function dishesPropertyArray(req, res, next){
    const {data: {dishes} = {}} = req.body
    if(Array.isArray(dishes)){
        return next();
    }
    next({
        status: 400,
        message: "Order must include at least one dish"
    })
}

function dishesPropertyEmpty(req, res, next){
    const {data: {dishes} = {}} = req.body
    if(dishes.length > 0){
        return next();
    }
    next({
        status: 400,
        message: "Order must include at least one dish"
    })
}

function dishQuantityProperty(req, res, next){
    const {data: {dishes} = {}} = req.body;
    const quantityMissing = dishes.find((dish) => !dish.quantity); 
    if(quantityMissing){
        quantityMissing.index = dishes.indexOf(missingQuantity)
    next({
        status: 400,
        message: `Dish ${quantityMissing.index} must have a quantity that is an integer greater than 0.`
    })
}
    return next();
}

function dishQuantityGreaterThanZero(req, res, next){
    const {data: {dishes} = {}} = req.body;
    const quantityLessThanOne = dishes.find((dish) => dish.quantity < 1);
    if(quantityLessThanOne){
        quantityLessThanOne.index = dishes.indexOf(quantityLessThanOne);
        next({
            status: 400, 
            message: `Dish ${quantityLessThanOne.index} must have a quantity that is an integer greater than 0.`
        })
    }

    return next();
}

function dishQuantityPropertyNotInteger(req, res, next){
    const {data: {dishes} = {}} = req.body;
    const quantityNotInteger = dishes.find((dish) => !Number.isInteger(dish.quantity));
    if(quantityNotInteger){
        quantityNotInteger.index = dishes.indexOf(quantityNotInteger)
        next({
            status: 400, 
            message: `Dish ${quantityNotInteger.index} must have a quantity that is an integer greater than 0.`
        })
    }
}

function create(req, res){
    const {data: {deliverTo, mobileNumber, status, dishes} = {}} = req.body;
    const newId = new nextId;
    const newOrder = {
        id: newId,
        deliverTo: deliverTo,
        mobileNumber: mobileNumber,
        status: status,
        dishes: dishes
    }

    orders.push(newOrder);
    res.status(201).json({data: newOrder})
}

function orderExists(req, res, next){
    const { orderId } = req.params;
    const foundOrder = orders.find((order) => order.id === orderId);
    if(foundOrder){
        res.locals.order = foundOrder;
        return next();
    }

    next({
        status: 404, 
        message: `Order id not found: ${orderId}`
    })
}

function read(req, res){
    res.json({data: res.locals.order})
}

function orderIdMatch(req, res, next) {
    const {data: {id} = {}} = req.body;
    const {orderId} = req.params;
    if (id === orderId || !id) {
      return next();
    }
    next({
      status: 400,
      message: `Order id does not match route id. Order: ${id}, Route: ${orderId}`,
    });
  }
  
  // Middleware function to check if status property exists
  function statusPropertyExists(req, res, next) {
    const {data: {status} = {}} = req.body;
    if (status) {
      return next();
    }
    next({
      status: 400,
      message: `Order must have a status of pending, preparing, out-for-delivery, delivered.`,
    });
  }
  
  // Middleware function to check if status property is correct value
  function statusPropertyCorrect(req, res, next) {
    const {data: {status} = {}} = req.body;
    if (
      status === "pending" ||
      status === "preparing" ||
      status === "out-for-delivery" ||
      status === "delivered"
    ) {
      return next();
    }
    next({
      status: 400,
      message: `Order must have a status of pending, preparing, out-for-delivery, delivered.`,
    });
  }
  
  // Middleware function to check if order has been delivered
  function statusPropertyDelivered(req, res, next) {
    const {data: {status} = {}} = req.body;
    if (status === "delivered") {
      next({
        status: 400,
        message: `A delivered order cannot be changed.`,
      });
    }
    return next();
  }
  
  // Router function to update an order
  function update(req, res) {
    const order = res.locals.order;
    const {data: {deliverTo, mobileNumber, status, dishes} = {}} = req.body;
    order.deliverTo = deliverTo;
    order.mobileNumber = mobileNumber;
    order.status = status;
    order.dishes = dishes;
  
    res.json({data: order});
  }
  
  // Middleware function to check if status property is pending
  function statusPropertyPending(req, res, next) {
    const order = res.locals.order;
    const {status} = order;
    if (status === "pending") {
      return next();
    }
    next({
      status: 400,
      message: `An order cannot be deleted unless it is pending.`,
    });
  }
  
  // Router function to delete an order
  function destroy(req, res) {
    const {orderId} = req.params;
    const index = orders.findIndex((order) => order.id === orderId);
    orders.splice(index, 1);
  
    res.sendStatus(204);
  }



module.exports = {
    list,
    create: [
        deliverToPropertyExists,
        deliverToPropertyEmpty,
        mobileNumberPropertyExists,
        mobileNumberPropertyEmpty,
        dishesPropertyExists,
        dishesPropertyArray,
        dishesPropertyEmpty,
        dishQuantityProperty,
        dishQuantityGreaterThanZero,
        dishQuantityPropertyNotInteger,
        create
    ],
    read: [orderExists, read],
    update: [
        orderExists,
        deliverToPropertyExists,
        deliverToPropertyEmpty,
        mobileNumberPropertyExists,
        mobileNumberPropertyEmpty,
        dishesPropertyExists,
        dishesPropertyArray,
        dishesPropertyEmpty,
        dishQuantityProperty,
        dishQuantityGreaterThanZero,
        dishQuantityPropertyNotInteger,
        orderIdMatch,
        statusPropertyExists,
        statusPropertyCorrect,
        statusPropertyDelivered,
        update
    ],
    delete: [
        orderExists, 
        statusPropertyPending, 
        destroy]
}