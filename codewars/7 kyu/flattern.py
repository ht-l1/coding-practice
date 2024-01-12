# The goal is to create a function that takes an array as input and returns a new array that is flattened, but only one level deep.

def flatten(lst):
    result = []
    for item in lst:
        # if item is an array (list), then extend the result list with its elements 
        if type(item) == list:
            result.extend(item)
        else:
            result.append(item)
    return result
