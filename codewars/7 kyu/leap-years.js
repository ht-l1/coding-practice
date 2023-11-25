// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
// - Years divisible by 4 are leap years,              >> leap year IS (year % 4 === 0)
// - but years divisible by 100 are not leap years,    >> leap year IS (year % 100 !== 0)
// - but years divisible by 400 are leap years.        >>  year % 400 === 0
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  return (
    year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// test case 2020
// (1a) year % 100 !== 0 returns True (2020 / 100 = 20.2 not divisble). 
// (1b) year % 4 === 0 returns True (2020 / 4 = 505 yes diversible).
// first overall condition returns True. 
// (2) year % 400 === 0 returns False. (2020 / 400 = 5.05) 
