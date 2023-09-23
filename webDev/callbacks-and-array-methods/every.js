// EVERY tests whether all elements in the array pass the provided function. It returns a Boolean value.

const words = ["dog", "dig", "log", "bag", "wag"];

const printOut1 = words.every(word => {
    return word.length === 3;
})  //true

const printOut2 = words.every(word => word[0] === 'd'); //false

const printOut3 = words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
}) //true

console.log(words)
console.log(printOut1)
console.log(printOut2)
console.log(printOut3)

// exercise
const allEvens = (num) => {
    return num.every(num => num % 2 === 0);
}