/*
    When we want to make parallel API calls and get the results we can use Promise.all() API.

    It is used to handle multiple promises togther. It takes the iterable (could be an array).

    Promise.all([p1, p2, p3]) here it waits for all of them to finish and return an array of results

    [val1, val2, val3] corresponding outputs of promises.

    If any of all the API/Promise throws an error Promise.all() also throws an error.

*/


/*
    Promise.allSettled() this is same all Promise.all() but in case of failure of one of the promises, it doesn't throw an error.

    Instead it waits for other promises to finish. If [p1, p2, p3] is the input then, it returns [val1, err2, val3] assuming that

    p2 throw an error. So the output will be an array of same size as input array.
*/


/*
    Promise.race() it returns the result of a promise who resolved first.

    if the first settled promise is an error, then Error will be thrown from the Promise.race();

    In other words it return the output of first completed/settled promise as it is.
*/


/*
    Promise.any() here we return the results of first successed promise.

    If all the promises fail, then we get an aggregated error (array of errors correspoding to each Promise).
*/

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P1 is sucess"), 3000);
    setTimeout(() => reject("P1 is Error"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 is sucess"), 1000);
    setTimeout(() => reject("P2 is Error"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 is sucess"), 2000);
    setTimeout(() => reject("P3 is Error"), 2000);
})

Promise.all([p1, p2 ,p3])
    .then(res => console.log(res))
    .catch(err => console.error(err));

Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err))

Promise.race([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err));


Promise.any([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => {
        console.error(err)
        console.log(err.errors)
    });