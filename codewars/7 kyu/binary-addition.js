// adds two numbers together and returns their sum in binary
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    return Number(a + b).toString(2);
}

// test cases
console.log(addBinary(1,1)); //output: "10"
console.log(addBinary(5,9)); //output: "1110"