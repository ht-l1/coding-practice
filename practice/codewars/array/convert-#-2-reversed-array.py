# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
# 35231 => [1,3,2,5,3]

# solution 1
# str(n): Convert the number n to a string representation.
# [::-1]: Use string slicing to reverse the string.
# map(int, ...): Apply the int function to each character in the reversed string, converting them to integers.
# The map function returns an iterator, which can be converted to a list using list(...) if needed.

def digitize(n):
    return map(int, str(n)[::-1])

# solution 2
# str(n): Convert the number n to a string representation.
# [::-1]: Use string slicing to reverse the string.
# [int(x) for x in ...]: Create a list comprehension that iterates through the reversed string, converting each character x to an integer using int(x).

def digitize(n):
    return [int(x) for x in str(n)[::-1]]
