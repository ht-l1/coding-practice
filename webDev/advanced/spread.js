const nums = [13, 4, 5, 22, 315, 21, 25, 26,45]
// normally it prings out the whole array
// output: [13,  4,  5, 22, 315,21, 25, 26, 45]
console.log(nums)
// with spread, each element is passed seperately into console.log
// output: 13 4 5 22 315 21 25 26 45
console.log(...nums)  

// console.log(Math.max(nums))
// console.log(Math.max(...nums))

console.log("hello")       // output: hello
console.log(..."hello")    // output: h e l l o
console.log("h","e","l")   // output: h e l