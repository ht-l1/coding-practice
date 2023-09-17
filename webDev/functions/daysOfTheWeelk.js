// In this function, daysOfWeek is an array where the days of the week are indexed from 0 to 6 (Monday to Sunday). The function checks if the input number is within the valid range (1-7) and returns the corresponding day from the daysOfWeek array. If the input is outside this range, it returns null.

function returnDay(number) {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (number >= 1 && number <= 7) {
        return daysOfWeek[number - 1];
    } else {
        return null;
    }
}

// Test cases
console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null
console.log(returnDay(8)); // null
