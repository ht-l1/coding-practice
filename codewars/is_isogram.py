# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
# example: 
# isIsogram "Dermatoglyphics" = true  (no repeats)
# isIsogram "moose" = false   (two repeasts letter o)

# better solution
def is_isogram(string):
    string = string.lower()

    for letter in string:
        if string.count(letter) > 1: 
            return False
    return True

# my solution
# 1. convert the input string to lowercase to ignore lettercase
# 2. create a set to store encountered letters 
# 3. iterate through each letter in the string
# 3a. if the letter is already in the set, then it's repeat, should be False.
# 3b. otherwise, add the letter to the set

def is_isogram(string):
    string = string.lower()
    
    seen_letters=set()

    for letter in string:
        if letter in seen_letters:    
            return False 
        seen_letters.add(letter)

    return True