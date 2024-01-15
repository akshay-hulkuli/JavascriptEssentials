const arr = [1,2,3,4,5];

const double = (v) => {
    return v * 2
}

const triple = (v) => {
    return v * 3
}

const toBinary = (v) => {
    return v.toString(2);
}

console.log(arr.map(double))
console.log(arr.map(triple))
console.log(arr.map(toBinary))


const users = [
    {name: "Akshaya", age:24},
    {name: "Gandhi", age:124},
    {name: "Bose", age:134},
    {name: "Gotse", age:124}
]

console.log(users.reduce((acc, cur)=>{
    if(acc[cur.age]){
        acc[cur.age] = acc[cur.age] + 1;
    } else {
        acc[cur.age] = 1;
    }
    return acc;
}, {}))