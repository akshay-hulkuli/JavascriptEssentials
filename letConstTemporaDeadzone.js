/*
prints undefined and throws Reference error 'Cannot access 'b' before initialization'
*/

// console.log(a);
// console.log(b);

// var a = 10;
// let b = 100;


/*
prints 10 and undefined as b is not attached to global object.
*/

// var a = 10;
// let b = 100;

// console.log(this.a);
// console.log(this.b);



/*
We can a 2 variables declared with same name using var. but let does not allow.
*/

// No Error
// var a = 10;
// var a= "string"

// Error - SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// let a= "string"


/*
We can reintialise or initialise variables declared using let keyword.
But const does not allow that.
*/

// let a;

// const b = 100;
// a = 10;


/*
Reinitialization of const variable gives typeerror.
*/

// const b = 10;
// b = 11;