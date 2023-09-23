// example
console.log("HELLO!!...")
setTimeout(() => {
    console.log("... are youstil there?")
}, 3000)

console.log("this runs at the same time as Hello..")

// example
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id);