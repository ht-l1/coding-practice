# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

# # the solution I like
# Time Complexity:O(n)   >> directly proportional to the value of the input "n"
# Space Complexity:O(n)   >> directly proportional to the value of the input "n"
def count_sheep(n):     # defines a function called count_sheep that takes one argument n
    sheep=""            # initializes an empty string variable named sheep
    for i in range(1, n+1):  #for loop that iterates over the range 1>n+1 (run n times)
        sheep+=str(i) + " sheep..."     #convert the i to a string
    return sheep

# my solution
def count_sheep(n):
    murmur = ""
    for i in range(1, n + 1):
        murmur += f"{i} sheep..."
    return murmur