// 1. Understanding the Problem:
// The problem involves a ball being dropped from a certain height, bouncing to a fraction of its previous height, and checking how many times it is visible to an observer at a specific window height. We need to ensure the input conditions are met and then simulate the ball's motion.

// 2. Conditions:
// The height (h) must be greater than 0.
// The bounce factor (bounce) must be greater than 0 and less than 1.
// The window height (window) must be less than h.

// 3. Approach / pseudocode:
// Validate input conditions.
// Initialize a variable to count the number of times the ball is seen (seen_count).
// Use a loop to simulate the ball's motion:
// Check if the current height is above the window, increment seen_count.
// Update the height based on the bounce factor.
// Return the final seen_count.

function bouncingBall(h, bounce, window) {
    if (h>0 && bounce < 1 && bounce > 0 && window < h){
        // initiating because it will get at lease seen once
        let count = 1
        h = h * bounce
        // the while loop continues as long as h > window
        while ( h > window) {
            // the ball is seen twice in each bounce (once on the way up and once on the way down)
            count += 2
            h = h * bounce
        }
        return count 
    } else {
        return -1
    }
}

// test case
const result = bouncingBall(30, 0.75, 1.5);
console.log(result); // Output: 21