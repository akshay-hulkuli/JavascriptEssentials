
// prints everything
// var x = 7;

// function printSomething(){
//     console.log("namaste javascript!!!!");
// }

// printSomething();

// console.log(x);


/*
    prints function content but x will be printed as undefined.
*/


// printSomething();

// console.log(x);

// var x = 7;

// function printSomething(){
//     console.log("namaste javascript!!!!");
// }



/*
    prints function content but printing x throws an error telling not defined.
*/


// printSomething();

// console.log(x);

// function printSomething(){
//     console.log("namaste javascript!!!!");
// }


/*
 prints entire function.
*/

// console.log(printSomething);

// function printSomething(){
//     console.log("namaste javascript!!!!");
// }


/*
 we get an error 'TypeError: printSomething is not a function', since array functions work as a variable by default undefined is stored in them.
*/

// printSomething();

// var x = 7;

// var printSomething = () => {
//     console.log("Namaste javascript!!!")
// }


/*
 we get an error ReferenceError: Cannot access 'printSomething' before initialization'.
*/

// printSomething();

// var x = 7;

// const printSomething = () => {
//     console.log("Namaste javascript!!!")
// }



var x = 7;

function printSomething() {
    console.log("Namaste javascript");
}

printSomething();
console.log(x);
console.log(printSomething)