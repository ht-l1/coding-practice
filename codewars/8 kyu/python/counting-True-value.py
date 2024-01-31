def count_sheeps(sheep):
    count = 0  # Initialize a variable to count the number of sheep
    for s in sheep:  # Iterate through each element in the 'sheep' list
        if s:  # Check if the element (sheep) is truthy
            count += 1  # If the sheep is present (True), increment the count
    return count  # Return the total count of sheep present in the list
