const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const maxDistance = mpg * fuelLeft; // maximum distance the car can travel
  return maxDistance >= distanceToPump;
};

// test case
console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 25, 2)); // false
