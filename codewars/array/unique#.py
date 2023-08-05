# solution 1
# a, b = set(arr): uses the set function to convert the arr list into a set. 
# Since a set can only contain unique elements, set(arr) will contain only two elements, 
    # one being the unique number, 
    # and the other being the common number. 
# We unpack these two elements into variables a and b.

def find_uniq(arr):
    a, b = set(arr)
    return a if arr.count(a) == 1 else b


# solution 2
def find_uniq(arr):
    s = set(arr)
    for e in s:
        if arr.count(e) == 1:
            return e