function x() {
    for(var i=0; i<=5; i++) {
        setTimeout(function y() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello world");
}

x();

// Above code prints 6 at intervals of 1 sec.



// function x() {
//     var j = 1;
//     for(var i=1; i<=5; i++) {
//         setTimeout(function y() {
//             console.log(j);
//             j++;
//         }, i * 1000);
//     }
//     console.log("Hello world");
// }

// x();

// above code prints 1 to 5 at interval of 1 sec.





// function x() {
//     for(let i=1; i<=5; i++) {
//         setTimeout(function y() {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello world");
// }

// x();

// above code prints 1 to 5 at interval of 1 sec.