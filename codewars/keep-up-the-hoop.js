// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

function hoopCount(n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}

// Example usage:
const alexHoopResult = hoopCount(8);
console.log(alexHoopResult);  // Output: Keep at it until you get it

const alexHoopResult2 = hoopCount(12);
console.log(alexHoopResult2);  // Output: Great, now move on to tricks