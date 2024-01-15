// Javascript is a synchrous and single-threaded language

// please note here the callstack (which hold execution contexts becomes empty after executing regular methods and then after 5 sec the 
// callback function comes into callstack out of nowhere)

// setTimeout(()=>{
//     console.log("timer");
// }, 5000)

// function x(y) {
//     console.log("inside x")
//     y();
// }

// function y() {
//     console.log("inside y");
// }

// x(y);

function closureProvidingMethod() {
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
    console.log("The button is clicked", ++count);
    })
}

closureProvidingMethod();
