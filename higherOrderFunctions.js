/*
 A function which takes a function as an input or return a function as an input is known as HOF.
*/

//Writing code to calculate area, circumference and diameter of a circle. Using function programming way.


const calculateArea = (radius) => {
    return Math.PI * radius * radius;
}

const calculateDiameter = (radius) => {
    return 2 * radius;
}

const calculateCircumference = (radius) => {
    return Math.PI * 2 * radius;
}


// My higher order function
const calculate = (radiusList, logic) => {
    let output = [];
    for(let i=0; i< radiusList.length; i++){
        output.push(logic(radiusList[i]));
    }
    return output;
}


let radiusList = [10, 12, 24, 13];

console.log(calculate(radiusList, calculateArea))
console.log(calculate(radiusList, calculateCircumference))
console.log(calculate(radiusList, calculateDiameter))


/*
    calculate function is same as map function.
*/

console.log(radiusList.map(calculateArea))


/*
 prototyping function ->
*/

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i< this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radiusList.calculate(calculateCircumference));