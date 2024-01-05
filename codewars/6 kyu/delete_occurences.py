def delete_nth(order,max_e):
    # Initialize an empty list called result to store the final result.
    result = []
    # Create an empty dictionary called count_dict to keep track of the count of each number encountered in the input list.
    count_dict = {}
    
    # Loop through each number, num, in the input list order.
    for num in order:
        # If num is not already in count_dict, initialize the count with 1 and append num to the result list.
        if num not in count_dict:
            count_dict[num] = 1
            result.append(num)
        # If num is already in count_dict, check if its count is less than max_e. If true, increment the count, and append num to the result list.
        else:
            if count_dict[num] < max_e:
                count_dict[num] += 1
                result.append(num)
                
    return result
