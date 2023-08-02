# Given an array of ones and zeroes, convert the equivalent binary value to an integer.
# Testing: [1, 0, 1, 1] ==> 11

# Consider the input array arr = [1, 0, 1, 0].

# Step 1: ''.join(str(a) for a in arr) will convert each element of arr to a string and join them together:
# ''.join(str(a) for a in arr) evaluates to "1010"

# Step 2: int("1010", 2) will convert the binary string "1010" to an integer:
# int("1010", 2) evaluates to 10
# So, the final output for the function binary_array_to_number([1, 0, 1, 0]) is 10.

def binary_array_to_number(arr):
    return int(''.join(str(a) for a in arr), 2)