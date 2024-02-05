def candies(lst):
    # Check if there are no kids or only one kid
    if len(lst) < 2:
        return -1

    # Find the maximum number of candies among all kids
    max_candies = max(lst)

    # Initialize the total candies distributed
    total_candies = 0

    # Calculate the total number of extra candies needed
    for candy in lst:
        total_candies += max_candies - candy

    return total_candies
