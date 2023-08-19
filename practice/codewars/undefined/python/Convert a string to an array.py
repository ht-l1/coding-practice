# Write a function to split a string and convert it into an array of words.

# best solution
def string_to_array(s):
    return s.split(" ")

# My solution
def string_to_array(s):
    # Check if the input string is empty
    if not s:
        return [""]
    
    # Using split() method to split the string into words
    words_array = s.split()
    return words_array