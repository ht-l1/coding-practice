// const add = function(x,y) {
//     return x+y;
// }

// example 1
const add = (x,y) => {
    return x + y;
}

// example if single argument
const square = num => {
    return num ** 2;
}

// example
const rollDie1 = () => {
    return Math.floor(Math.random() *6) + 1
}

// with implicit return parathensic without usin the word return
const rollDie2 = () => (
    Math.floor(Math.random() *6) +1
)

// exercise
const greet = (name) => {
    return `Hey ${name}!`;
}

greet();

// implicit return of one liner
const add2 = (a,b) => a + b