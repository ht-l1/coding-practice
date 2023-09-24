// a short, clean syntax to unpack into distinct varaiables

// array destructuring

const raceResults = ['Eliud K', 'Fey', 'Galen'];

const [ gold, silver, bronze ] = raceResults;
console.log(gold);  //Eliud K
console.log(silver);  //Fey
console.log(bronze);   //Galen

const [ fatest, ...everyoneElse ] = raceResults;
console.log(fatest);  //Eliud K
console.log(everyoneElse);  //[ 'Fey', 'Galen' ]