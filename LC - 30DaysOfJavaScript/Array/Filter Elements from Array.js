var filter = function(arr, fn) {
    var filteredArr = [];
    // i is used as an index to keep track of the current element being examined in the loop
    for (var i = 0; i < arr.length; i++) {
        // The if statement evaluates the result of fn(arr[i], i). 
        // If the result is true, it means that the element satisfies the condition specified in the callback function, so it is included in the filtered array.
        if (fn(arr[i],i)) {
            //If true, the current element (arr[i]) is added to the filteredArr using the push method. This builds up the filtered array with elements that meet the condition.
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};