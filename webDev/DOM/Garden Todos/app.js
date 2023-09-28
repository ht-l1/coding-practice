// Your code goes in here!

// Select all elements that have the class of "done" and save them in a variable called doneTodos
var doneTodos = document.querySelectorAll(".done");

// Select the one checkbox using the type attribute and save it in a variable called checkbox
var checkbox = document.querySelector('input[type="checkbox"]');

// Add an event listener to the checkbox to toggle the "done" class on the list items
checkbox.addEventListener('change', function() {
    // Loop through all the doneTodos and apply or remove the class based on the checkbox state
    doneTodos.forEach(function(todo) {
        if (checkbox.checked) {
            todo.classList.add('done');
        } else {
            todo.classList.remove('done');
        }
    });
});
