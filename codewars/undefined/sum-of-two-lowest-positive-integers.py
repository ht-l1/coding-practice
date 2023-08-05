# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# thought process
    # Sort the array in ascending order
    # Return the sum of the two lowest positive numbers

def sum_two_smallest_numbers(numbers):
    sorted_numbers = sorted(numbers)
    return sorted_numbers[0] + sorted_numbers[1]

# better solution
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]