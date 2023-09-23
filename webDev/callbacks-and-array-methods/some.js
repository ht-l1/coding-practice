const words = ['dog', 'jello', 'log', 'bag']

// are there any words longer than 4 chars?
const length = words.some(word => {
    return word.length > 4;
}) //true

// do any words start with 'Z'?
const Z = words.some(word => word[0] === 'Z'); //false

// do any words contain 'cake'?
const cake = words.some(w => w.includes('cake')) //true

console.log(words)
console.log(length)
console.log(Z)
console.log(cake)
