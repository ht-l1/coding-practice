// const texts = ['roll','a','dice'];
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// })

// console.log(texts);
// console.log(caps);

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// this line creates a new array called firstNames by applying the map method to the fullNames array.
// function (name) { return name.first; }: This is an anonymous function (a function without a name) that takes an argument called name. 
// Inside the function, it accesses the first property of the name object and returns it.
const firstNames = fullNames.map(function (name) {
    return name.first;
  });

  // now introducing in the arrow functions
const newMovies = movies.map(movie => 
  `${movie.title} - ${movie.score/10}`
)