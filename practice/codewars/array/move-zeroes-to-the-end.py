# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

def move_zeros_to_end(arr):
    non_zeros = []  # List to store non-zero elements in their original order
    zero_count = 0  # Variable to count the number of zeros

    # Append non-zero elements to the new list and count zeros
    for num in arr:
        if num != 0:
            non_zeros.append(num)
        else:
            zero_count += 1

    # Append zeros to the new list based on the zero count
    non_zeros.extend([0] * zero_count)

    return non_zeros