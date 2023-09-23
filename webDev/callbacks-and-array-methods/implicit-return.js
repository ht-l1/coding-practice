// Implicit Return
// all these functions do the same thing
const isEven = function (num) {
    return num % 2 === 0;
}

const isEvent = (num) => {
    return num % 2 === 0;
}

const isEven = num => {
    return num % 2 === 0;
}

const isEven = num => (
    num % 2 === 0
)

const isEven = num => num % 2 === 0;