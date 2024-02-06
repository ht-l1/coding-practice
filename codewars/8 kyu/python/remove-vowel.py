def shortcut( s ):
    vowels = 'aeiou'
    result = ''
    for char in s:
        if char not in vowels:
            result += char
    return result
