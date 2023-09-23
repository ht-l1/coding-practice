// reduce executes a reducer function on each element of the array, resulting in a single value.
// [3,5,7,9,11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

const prices = [9.99, 1.50, 19.33, 49.99];

// let total = 0;
// for (let price of prices) {
//     total += price
// }

// console.Log(total)

const total1 = prices.reduce((total, price) => {
    return total + price
})

const total2 = prices.reduce((total, price) => total + price)

console.log(total1)
console.log(total2)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

console.log(minPrice)

// movie example
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

console.log(highestRated)

// example
const evens = [2,4,5];
evens.reduce((sum, num) => sum + num, 100)
