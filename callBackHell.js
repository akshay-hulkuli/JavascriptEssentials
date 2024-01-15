// Callbacks are used to create asynchrous nature in the javascript.
// It has 2 disadvantages -> 1. Callback hell and 2. Inversion of control.
// a long series of nested callbacks is called as callback hell.
// Usually this happens when we have multiple API calls that are dependent upon each other.

const cart = ["shirt", "pant"];

api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet();
        })
    })
})


// Inversion of control is losing control over our code when we get into a callback hell.

api.createOrder(cart, function() {
    api.proceedToPayment()
})

/*
    Here we are passing proceedToPayment to the API createOrder.
    We are trusting createOrder API and we don't know what is happening inside it.
    There could be bugs this proceedToPayment might get called twice or might never be called.
    So here we are losing control over the code.
*/