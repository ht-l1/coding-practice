# Build a function that returns an array of integers from n to 1 where n>0.

# thought proces:
# 1. Define an empty list to store the integers.
# 2. Use a loop to iterate from n down to 1, and in each iteration, append the current value of n to the list.
# 3. Decrement the value of n in each iteration until it reaches 1.
# 4. Return the list of integers.

# Space Complexity and Time Complexity: O(n)

def reverse_seq(n):
    list = []
    while n > 0:    #loop will continue as long as the value of 'n' is greater than 0
        list.append(n)  #append/add the current value 'n' to the list
        n -= 1  #after adding, it decrements the value 'n' by 1 so it append the next smaller value
    return list
