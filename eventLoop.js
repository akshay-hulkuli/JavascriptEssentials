/* 
    The javascript engine includes only the callStack where execution context are put.
    Execution contexts have variable environment and thread of execution resposible for executing the code.

    Browser is the one who provides usefull APIs. We call them as webAPIs examples -> setTimeout, console, localstorage, document (DOM APIs), fetch etc.
    all of these web API are wrapped togther and made accessible through `window` object.

*/


// console.log("Start");

// setTimeout(()=> {
//     window.console.log("Callback function invoked")
// }, 5000)

// window.console.log("End");


/*  
    First the golbal execution context will be put into callStack and javascript executes it.

    After 5 sec the callback function will be put into callStack and it will be executed.

    After the timer expiry callback function will be put into `Callback Queue`.

    There will be something known as `EventLoop` that keeps dequeuing code to be executed from callback queue.

    This event loop now picks up callback function from `callback queue` and put it into callStack.

    The Event Loop monitors the Call Stack and the Callback Queue, ensuring that callback functions are executed once the Call Stack is empty.

*/


// console.log("Start of Global execution context");

// document.getElementById("clickMe").addEventListener("click", cb = () => {
//     console.log("inside click callback");
// })

// console.log("End of Global execution context");



// console.log("Start of Global execution context");

// setTimeout(() => {
//     console.log("CB setTimeout")
// }, 5000)


// fetch("https://api.netflix.com").then(() => {
//     console.log("CB netflix")
// })
// console.log("End of Global execution context");


/*
 in the above example callback function from setTimeout goes to callback Queue whatever we have discussed.

 But the callabck from the API call goes to `Microtask Queue`. And event loop gives more priority to callbacks coming from Microtask Queue.

 The callbacks from `promices and callbacks from mutation observer` are put here.
*/


/*
    Code Execution ->
        1. Parsing ->
            a. break code into tokens
            b. Generate Abstract syntax tree
        2. Compilation ->
            a. Just in time compiler -> uses both Interpritter and compiler. It starts interpritting line by line and uses compilation for efficiency.
        3. Execution.

*/

console.log("start")

setTimeout(()=>{
    console.log("hello");
}, 0)

console.log("end");

/*
    above code prints start end hello.
    that is becuase callback will be put into callback queue, and will be picked by eventLoop
    only after the global execution context is completed.
    This kind of setTimeout is useful when we need to differ a piece of code.
*/