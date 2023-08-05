# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

def array_diff(a, b):
    
    result = []
    for element in a:
        if element not in b:
            result.append(element)
            
    return result