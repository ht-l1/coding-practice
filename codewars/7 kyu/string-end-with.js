function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;

// running a test case 
// console.log(solution('abc', 'bc'));
// 1. both str 'abc' and ending 'bc' are string
// 2. ending.length = 'bc'.length = 2; str.length = 'abc'.length = 3; 2 < 3
// 3. str.length (3) - ending.length （2） = 1
// str.substr(str.length-ending.length, ending.length) = str.substr(1, 2) = bc
// bc == ending ('bc')
