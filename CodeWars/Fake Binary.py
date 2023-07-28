# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
# Note: input will never be an empty string

# solution 1
def fake_bin(x):
    return ''.join('0' if c < '5' else '1' for c in x)

# solution 2
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result = result + "0"
        else:
            result = result + "1"
    return result
