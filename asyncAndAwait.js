/*
    an async function always returns a promise.
    If we don't return a promise from an async function, then it wraps the value that we have returned with a promise and returns it.
    If we don't return anything still it returns a promise with PromiseState -> fullfilled and PromiseResult being undefined.
*/

// const p = new Promise(function(resolve, reject) {
//     resolve("Good day");
// })

// Always returns a promise
// async function getData() {
//     // Wraps this value with a promise. 
//     // return "Akshay";
//     return p;
// }

// const result = getData();
// console.log(result);

// result.then(res => console.log(res));





/*
    Async and await combo is used to handle promises.
    await is a keyword that can only be used inside an async function.
*/

// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Good day"), 10000);
// })

// // Old way
// function getData() {
//     //JS engine will not wait
//     p1.then(res => console.log(res));
//     console.log("Yes Indeed")
// }
// getData();


// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Good day"), 10000);
// })
// // async await
// async function getData2() {
//     //JS engine will wait
//     const val = await p2;
//     console.log("namaste")
//     console.log(val);
// }

// console.log(getData2());


/*
    Some tricky Examples
*/

/*
    //The timer starts here only
    const p2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Good day"), 10000);
    })
    // async await
    async function getData2() {
        //JS engine will wait
        const val = await p2;
        console.log("namaste")
        console.log(val);
        const val2 = await p3;
        console.log("namaste2")
        console.log(val2);
    }

    getData2();
    // above code waits for 10 sec and prints everything at one shot
*/

/*
    const p2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Good day"), 10000);
    })

    const p3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("gooood day"), 10000);
    })
    // async await
    async function getData2() {
        //JS engine will wait
        const val = await p2;
        console.log("namaste")
        console.log(val);
        const val2 = await p3;
        console.log("namaste2")
        console.log(val2);
    }

    getData2();
    // here also same behavior as above
*/

/*
    const p2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Good day"), 5000);
    })

    const p3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("gooood day"), 10000);
    })
    // async await
    async function getData2() {
        //JS engine will wait
        const val = await p2;
        console.log("namaste")
        console.log(val);
        const val2 = await p3;
        console.log("namaste2")
        console.log(val2);
    }

    getData2();
    // here after 5 sec first messages print then after 5 more sec we get last 2 messages.

*/

/*
    function getPromise() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Promise is resolved"), 10000);
        })
    }

    async function getData() {
        console.log("inside an async function");
        const val = await getPromise();
        console.log(val);
        const val2 = await getPromise();
        console.log(val2);
    }

    getData();
    console.log("I did not wait for promise")
    // here we get first message after 10 sec then after 10 more sec second messages get printed.
*/


/*
    Js engine while executing the async function if it encounter the await keyword it suspends execution of that function.
    That means it will be taken out from the callstack and callstack won't be blocked.
    The execution resumes when the promise is resolved.
*/



/*
    Real world examples
*/

const API_URL = 'https://api.github.com/users/akshay-hulkuli';

async function getUserData() {
    try {
    const data = await fetch(API_URL);
    // When we do .json() it converts the Response.Body to json and it return an promise.
    const jsonValue = await data.json();
    console.log(jsonValue);
    // equivalent to fetch(API_URL).then(res => res.json()).then(res => console.log(res));
    } catch(err) {
        console.log(err.message);
    }
}

getUserData();


/*
    There are 2 ways of handling error one is to use try catch block to enclose the await.
    or to put a .catch() to the async function call since it return a promise.
*/

getUserData().catch(err => console.log(err));
