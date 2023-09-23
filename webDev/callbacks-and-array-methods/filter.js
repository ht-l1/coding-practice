const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
    return n % 2 === 1;
})
const smallNums = nums.filter(n => n < 5);

console.log(nums);
console.log(odds);
console.log(smallNums);

// movie example
const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

// OR simplify it by writing
const goodMovie2 = movies.filter(movie => movie.score > 80)
const recentMovies = movies.filter(movie => movie.year > 2000)
