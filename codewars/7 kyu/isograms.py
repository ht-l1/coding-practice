# add() is used for sets to add a single element 
# append() is used for lists to add elements to the end of the list
# expend() is used to apend elements from an iterable (list) to the end of the an existing list

def is_isogram(string):
    # 1. convert the string to loewrcase to ignore case
    string = string.lower()
    # 2. create a set to store encountered letters
    encountered = set()
    # 3. iterate
    for letter in string:
        if letter in encountered:
            return False
        encountered.add(letter)
    
    return True
