/*
Block is a compound statement that combines multiple statements into one. done using flower brackets {}.
*/

/*
Since let and const are block scoped variables we won't be able to access b and c outside the block. we get not defined reference error
*/

// {
//     var a = 10;
//     let b = 10;
//     const c = "mama";

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);



/*
the declaration of `a` inside the block shadowed the outer most declaration as it is stored in global object.
outmost console log prints 10 not 100.
*/


// var a = 100;
// {
//     var a = 10;
//     let b = 10;
//     const c = "mama";

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

/*
But this keeps value of outer most a unchanged. This is because the second a present in the function won't be put into global variable.
*/

// function mama() {
//     var a = 10;
//     console.log(a);
// }

// var a  = 100;
// mama();
// console.log(a);


/*
Since let is blocked scoped 2 separate memory will be allocated and the outmost value remains unaltered.
*/

// let b = "string";

// {
//     var a = 10;
//     let b = 15;
//     const c = 20;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);


/*
if 'a' is defined as a let outside then in inside scope var 'a' is not allowed.
Syntax error.

vise versa is allowed
*/

// let a = 10;
// {
//     var a = 10;
// }

