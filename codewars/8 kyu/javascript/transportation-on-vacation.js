

function rentalCarCost(d) {
    var dailyRate = 40;
    var totalCost = d * dailyRate; // Calculate total cost without any discounts
  
    // Apply discounts based on the number of days rented
    if (d >= 7) {
      totalCost -= 50;
    } else if (d >= 3) {
      totalCost -= 20;
    }
  
    return totalCost;
  }
  
  // Example usage:
  var daysRented = 5; // You can change this value as needed
  var totalAmount = rentalCarCost(daysRented);
  console.log("Total amount for " + daysRented + " days: $" + totalAmount);
  