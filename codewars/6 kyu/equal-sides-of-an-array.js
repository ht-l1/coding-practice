function findEvenIndex(arr) {
    // Iterate through each index
    // i is assumed to be that current index (that is excluded from both sides)
    // leftSum wants all elements before the current index i
    // rightSum wants all elements after the current inex i
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // For Each Subsequent Iterations:
        // leftSum includes one more element from the left side.
        // rightSum excludes the element at the current index i.

        // Calculate the sum of elements on the left
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        // Calculate the sum of elements on the right
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        // Check if the sums are equal
        if (leftSum === rightSum) {
            return i; // Return the balance index
        }
    }

    // If no balance index is found
    return -1;
}