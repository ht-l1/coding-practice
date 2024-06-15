def alternate_sq_sum(arr):
    if not arr:
        return 0
    
    total_sum = 0
    
    for i in range(len(arr)):
        if i % 2 == 0:  
            total_sum += arr[i]
        else:  
            total_sum += arr[i] ** 2
            
    return total_sum
