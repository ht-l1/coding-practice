function capitalize(str) {
    if (str.length === 0) {
        return str; // Return an empty string if the input is empty
    } else {
        // Capitalize the first letter and concatenate it with the rest of the string
        return str[0].toUpperCase() + str.slice(1);
    }
}

// Test cases
console.log(capitalize('eggplant')); // "Eggplant"
console.log(capitalize('pamplemousse')); // "Pamplemousse"
console.log(capitalize('squid')); // "Squid"
console.log(capitalize('')); // ""