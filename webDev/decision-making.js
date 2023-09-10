// checking days
const dayOfWeek = prompt('Enter a day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHHH Hate Mondays!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I love saturdays!")
} else if (dayOfWeek === 'friday') {
    console.log("After work is great!")
} else {
    console.log("MEH")
}

// nesting
// (1) must be 6+ char (2) cannot include space
const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log("Valid password!!")
    }
} else {
    console.log("Password too short!!")
}

// Logical Operators
// Expression AND && 
const passwordC = prompt("Enter your password");
if (passwordC.length >= 6 ** passwordC.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT")
}

// Expression OR ||
const age = 90;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("invalid age")
}

// SWITCH
const day =1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wedn");
        break;
    case 4:
        console.log("Thur");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
    case 7:
        console.log("Weekend!")
        break;
    default:
        console.log("I don't know that")
}