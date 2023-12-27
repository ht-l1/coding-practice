def closed_brackets(s):
  # a represents the count of open parentheses (
  # b represents the count of closed parentheses )
    a, b = 0, 0
    # This loop iterates through each character in the input string s.
    for c in s:
        # special case
        # c == ")" indicates c is either "(" or "J". 
        # with that, and nothing in closing (b == 0) > would be signififying imbalance
        if c == ")" and b == 0:
            return False
        # Update counters for open and closed parentheses:
        a = a+1 if c == "(" else a and a-1
        b = b-1 if c == ")" else b+1

    # True if the count of open parentheses (a) is 0, indicating that the parentheses are balanced. 
    # Otherwise, it returns False.
    return not a
