// the arguments object

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(8,4,2,3));  //17
console.log(sumAll(2,3));  //5

// REST PARAMS
// collects all remaining arguments into an actual array
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}
sumAll(12,3);
sumAll(1,3,4,5,6);

// another exmaple
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD METAL GOES TO ${gold}`)
    console.log(`SILVER METAL GOES TO ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

raceResults('Tammy', 'Todd', 'Travis', 'Tina', 'Teah')