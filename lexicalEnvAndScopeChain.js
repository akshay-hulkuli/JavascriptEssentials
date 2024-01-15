// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b, kk);
//     }
// }

// let kk = "ak"

// a();


// function abc(a){
//     let b = 10;
//     if(true){
//         let a = 10;
//     }
//     console.log(a);
// }

// let b = 20;

// abc(20);


function counter(a){
    var count = 0;
    return function inc() {
        count++;
        console.log(count, a)
    }
}

var counter1 = counter("counter1");

counter1();
counter1();

var counter2 = counter("counter2");
counter2();
counter1();
counter2();
