// A triangle is valid if sum of its two sides is greater than the third side.

function isTriangle(a,b,c){
  
    // check if all side lengths are positive
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
    
    // Check if the given side lengths form a right-angled triangle
    if ( a + b > c && b + c > a && a + c > b ) {
      return true;
    }
    
    // If the conditions are not met, it's not a valid triangle
     return false;
  }