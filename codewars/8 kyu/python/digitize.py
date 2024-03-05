# n is non-negative number
# return the digits of this number within an array in revesed order

#str(n) converts the number 'n' to a string
#str(n)[::-1] reverses the string
#int(x) for x in .. iterate over each character (x) and convert it back to an integer 

def digitize(n):
    return [int(x) for x in str(n)[::-1]]
