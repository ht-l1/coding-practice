# TODO: implement the four functions specified.

# it gives you the first item of a list / array
# if lst > checks if the list is not empty 
def head(lst):
    return lst[0] if lst else None
    
# it gives you all the items in the list except the first one
def tail(lst):
    return lst[1:] if lst else []

# it gives you all the items in the list except the last oine
def init(lst):
    return lst[:-1] if lst else []

# it gives you the very last item in the list
def last(lst):
    return lst[-1] if lst else None
