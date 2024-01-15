/*
closure is a function bundled along with its lexical environment
*/

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//         console.log(b);
//     }
//     y();
// }

// let b = 100;
// x();

/*
    here function y is returned as a parameter from the function x. the returned function y remembers its lexical environment. 
    Hence the value 'a' will be printed.
*/

// function x() {
//     var a = 100;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// prints 10
// function x() {
//     var a = 100;
//     function y(){
//         console.log(a);
//     }
//     a  =10;
//     return y;
// }

// var z = x();
// console.log(z);
// z();




// function z () {
//   var b = 900
//   function x () {
//     var a = 100
//     function y () {
//       console.log(a,b)
//     }
//     y();
//   }
//   x();
// }

// z();


// memoization example. closure can be used for memoization
// function z() {
//     let a = 10;
//     function y() {
//         a+=10;
//         console.log(a);
//     }
//     return y;
// }

// let x = z();

// console.log(x);
// x();
// x();
// x();


// here if you see separate execution contexts will be created for counter function when it is called twice.

// function counter(a){
//     var count = 0;
//     return function inc() {
//         count++;
//         console.log(count, a)
//     }
// }

// var counter1 = counter("counter1");

// counter1();
// counter1();

// var counter2 = counter("counter2");
// counter2();
// counter1();
// counter2();



//Constructor function example


function Counter() {
    var count = 0;
    this.increment = function(){
        count++;
        console.log("count incremented to ", count);
    }
    this.decrement = function(){
        count--;
        console.log("count decremented to ", count);
    }
    this.getCount = () => {
        return count;
    }
}


var counter1 = new Counter();

counter1.increment();
counter1.decrement();
var count = counter1.getCount();
console.log(count);
count--;
counter1.increment();


// DisAdvantages of closures
// 1. over consumption of memoery.
// 2. Memory won't be garbage collected until the program is completely executed.