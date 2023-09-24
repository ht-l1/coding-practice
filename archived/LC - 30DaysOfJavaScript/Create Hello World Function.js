
var createHelloWorld = function() {
    const greeting = "Hello World"
    return function() {
        return greeting;
    }
};