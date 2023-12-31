[JavaScript MDN](https://developer.mozilla.org/en-US/) 

#### [Template Literals]()
`You bought ${qty} ${product}. Total is: $${price * qty}`
<i>output:You bought 5 Articoke. Total is :$11.25</i>

#### [Primitive Types]()
`Null`: intentinal absence & must be assigned <br>
`Undefined`: do not have an assigned value

#### [Comparisons]()
always use triple equals `===` and `!==` when compare things

#### [connect js file to html]()
```html
<head>
<script src="app.js"></script>
</head>
```

#### [Arrays]()
- Ordered collections of values
- Arrays are indexed
- Array methods
    - `push` > add to end
    - `pop` > remove from end
    - `shift` > remove from start
    - `unshift` > add to start
- Nested Arrays

#### [Object Literals]()
- Objects are collections of properties
- <b>Properties are a key-value pair</b>
- rather than accessing data using an index, we use custom keys
- valid keys - all keys are converted to strings
- `dot notation` vs `bracket notation`
    - `dot notation` is faster to write and clearer to read
    - `bracket notation` allows special characters and selection of properties using variables

#### [While Loops]() 
continue running as long as the test condition is true

#### [Methods vs Function]()
Every method is a function, but not every function is a method <br>
- Methods
`"hello".toUpperCase()` 
- Function
`function add(x,y) {return x+y}`

#### [callback function](https://levelup.gitconnected.com/javascript-callback-functions-89cc315aa5be)
- In Javascript, every function is an object. This allows us to use a function as a parameter in another function which is the fundamental idea of callback functions.
- A callback function is a function that is passed as an argument to another function and is expected to be called back at a later point in time.

#### [Filter]()
- creates a new array
- the original list does not change

#### [DOM]()
The <u>Document</u> object is our entry point into the world of the DOM. It contains representations of all the content on a page, plus other methods and properties.<br>
Selecting
```JavaScript
getElementByld
getElementsByTagNam 
getElementsByClassName
```
querySelector 
```JavaScript
document.querySelector('h1');    //finds first h1 element
document.querySelector('#red');  // finds first element with ID of red
document.querySelector('.big');  //finds first element with class of
```
querySelectorAll
- returns a collection of matching elements

<u>Object</u>
<u>Model</u>

#### [Async]()
Call Stack = LIFO (keep stacking to the top, and also removig from the top)

#### [Promise](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- `.then()` gets called after a promise resolved
- `.catch()` gets called after a promise rejected <br>

In below example, the Promise constructor receives two callbacks(resolve to handle success, and reject to handle errors)
```JavaScript
new Promise((resolve, reject) => {
    try {
        const data =  //perform a task here
        resolve(data)  // when data ready and no error, pass the data to the resolve method
    } catch(e){
        reject(new Error(e))   //if error, pass the error to the reject method
    }
})
```

#### [Microtasks and Macrotasks](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- Macro: `setTimeout` | `setInterval` | `setImmediate`
- Micro: `process.nextTick` | `Promise callback` | `async` | `queueMicrotask`
```JavaScript
console.log('Start')

setTimeout(() => {
    console.log('Timeout!')
},0)

Promise.resolve('Promise!')
    .then(res => console.log(res))

console.log('End!)
```
Here's the printout:
```bash
Start!
End!
Promise!
Timeout!      //Macrotask gets executed last
```

#### [Async Await](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- auto returns a promise
- `await` will pause the execution of the function, awaiting for a promise to be resolved

```JavaScript
const one = () => Promise.resolve('One')

async function myFunc() {
    console.log('In Function')
    const res = await one()
    console.log(res)
}

console.log('Before function!')
myFunc();
console.log('After function!')
```
Printout: note the `await` keyword suspends the `async` function whereas the Promise body would've kept on being executed if we would've used `then`!
```bash
Before function!
In function!
After function!
One!
```