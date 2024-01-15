/* 
    Function statement
*/

function a() {
    console.log("a called ");
}


/*
    Function Expression
*/

var b = function() {
    console.log("b is called");
} 

/*
    The difference between a() and b() is hoisting. a() can be accessed before initialization.
    but not b(), we will get TypeError b is not a function.
*/



/*
    Function declaration
*/

// this is same as function statement.


/*
    Anonymous Functions
*/

// these are used in places where functions are used as values;

// function() {

// }



/*
    Named function Expression
*/

var c = function abc() {
    console.log("c is called")
}

// abc is not created in the global executin context. Hence can't be accessed like the way we access c.



/*
    Diff between arguments and parameters
*/

function d(param1, param2) {
    console.log(param1, param2);
}

d("arg1", "arg2");



/*
    First Class Functions
*/

// The ability to pass functions as arguments and to return a function as a value is called as First Class functions




