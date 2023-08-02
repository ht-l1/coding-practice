# remove all of the vowels from the text
# Your task is to write a function that takes a string and return a new string with all vowels removed.
# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

def disemvowel(string_):
    # Define a string containing all vowels (both lowercase and uppercase)
    vowels = "aeiouAEIOU"

    # Use a list comprehension to iterate through each character in the input string
    # and only include characters that are not present in the 'vowels' string
    filtered_chars = [char for char in string_ if char not in vowels]

    # Join the filtered characters back together into a new string
    # without the vowels
    result_string = ''.join(filtered_chars)

    # Return the new string with the vowels removed
    return result_string


# concise version

def disemvowel(string_):
    vowels = "aeiouAEIOU"
    return ''.join(char for char in string_ if char not in vowels)

# other examples
list = [i for i in range(11) if i % 2 == 0]
print(list) #output: [0,2,4,6,8,10]