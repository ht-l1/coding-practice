# By adding [0] after split(), we are accessing the first element of this list, which is "7". 
# This element contains the age as a string.

def get_age(age):
    # split to get the first char
    res_str = age.split()[0]
    # turn the char to integer
    res_int = int(res_str)
    return res_int
