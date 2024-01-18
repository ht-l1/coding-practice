# *args: This allows the function to accept any number of arguments. The arguments will be collected into a tuple named args.
# try and except: used to handle potential errors that might occur during the execution of the code inside the try block.

# args[-1]: This accesses the last element of the tuple args. It assumes that the last argument passed to the function is a sequence (like a list or string).
# args[-1][-1]: This attempts to access the last element of the sequence (like a list or string) that was the last argument passed to the function.

def last(*args):
    try:
        return args[-1][-1]
    except:
        return args[-1]
