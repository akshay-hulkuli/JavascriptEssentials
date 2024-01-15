/*
    Promises are used to handle asynchrounous operations in javascript.
    promise returns an immutable object with the results of an asynchrous operation.
    The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

// const promise = createOrder(cart);

//This gets called only when the createOrder API completes.
// promise.then(function() {
//     proceedToPayment();
// })
// here we only attached the callback function, but in callback hell example we passed actual function itself.


const GITHUB_API = "https://api.github.com/users/akshay-hulkuli";

const user = fetch(GITHUB_API);

console.log(user);
/*
    it has 2 things 
        1. PromiseState (can be pending or fulfilled or rejected)
        2. PromiseResult (this contains the response)
*/

user.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
 })


/*
    The promises solve inversion of control problem in callbacks and also callback hell using callback chaining ex:
*/

// const cart = ['shirt']

// createOrder(cart)
//     .then(function(orderId) {
//         return proceedToPyament(orderId)
//     }).then(function(paymentInfo) {
//         return showOrderSummary(paymentInfo);
//     }).then(function(orderSum) {
//         return updateWallet(orderSum)
//     })




/*
    Creating our own promises
*/

const cart = ["shirts", "pants", "skirt"];
// const cart = [];

const promise = createOrder(cart);

promise
    .then(function(orderId) {
        console.log(orderId);
        //You can pass data or a promise down the chain
        return orderId;
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    // This is will catch error in any then. 
    // If we put it after first then(). in that case it catches error only in that
    .catch(function(err) {
        console.log(err);
    })
    .then(function() {
        console.log("i will be executed no matter what")
    })

console.log("hey mama");


function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment is successful");
    })
}


function createOrder(cart) {
    return new Promise(function(resolve, reject){
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err);
        } 
        const orderId = "123345";
        if(orderId) {
            resolve(orderId);
        }
    })
}

function validateCart(cart){
    return (cart && cart.length > 0)
}


/*
    in a promise we can call resolve or reject only once.
    we can either resolve ot reject
*/