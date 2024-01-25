# triplet: array of 3 distinct numbers
# approach: identify the min and max values
# enumerate: iterate over a sequence and returns pairs of index and value 

def gimme(input_array):
    minV = min(input_array)
    maxV = max(input_array)
    
    for index, num in enumerate(input_array):
        if num != minV and num != maxV:
            return index
