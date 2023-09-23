//  Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// returns a single accumulated value
var reduce = function(nums, fn, init) {
    let reducedResult = init;
    for (let i = 0; i < nums.length; i++) {
        reducedResult = fn(reducedResult, nums[i])
    }
    return reducedResult;
};