# Given an array of integers, return a new array with each value doubled.
# For example: [1, 2, 3] --> [2, 4, 6]

# best solution
def maps(a):
    return [2 * x for x in a]

# my solution
def maps(a):

    # Create a new list to store the doubled values
    doubled_values = []

    # Iterate through the elements in the input list 'a'
    for num in a:
        # Double each element and append it to the 'doubled_values' list
        doubled_values.append(num * 2)

    # Return the new list with doubled values
    return doubled_values