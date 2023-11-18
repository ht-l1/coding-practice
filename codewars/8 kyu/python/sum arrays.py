# Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

# best solution
# python's built-in 'sum()' function. it takes an iterable('a') and returns the sum of all its elements.
def sum_array(a):
    return sum(a)

# my solution
# define the function named "sum_array" that takes one parameter 'a', which is the input array of numbers
# initialize a variable "total" and set it to 0. this variable will be used to store the sum of all the numbers in the array.
# for loop > interates over each element 'num' in the input array 'a'
# adding each element's value to the 'total'
# returns the final value of the 'total' variable 
def sum_array(a):
    total = 0
    for num in a:
        total += num
    return total