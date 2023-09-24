// function(arr, fn) { ... }: anonymous function. It defines a function that takes two parameters: arr and fn.
// arr: This parameter is intended to be an array that you want to apply a mapping operation to.
// fn: This parameter is intended to be a callback function that you want to apply to each element of the input array arr.

// in the description it instructed: The returned array should be created such that returnedArray[i] = fn(arr[i], i).

var map = function(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // the fn() is the callback function with two elements (element and index)
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};