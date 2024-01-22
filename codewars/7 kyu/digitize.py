# integer > string > integer 
# 1. convert the integer to a string so you can access the indiivdual char within to iterate
# 2. initalize an empty list to store
# 3. iterate: convert each char to an integer 
# 4. append the converted integer to the list

def digitize(n):
    # convert the integer to a string
    num_str = str(n)
    
    # initialize an empty list
    res = []
    
    for num in num_str:
        res.append(int(num))
        
    return res
