def open_or_senior(data):
    # Output will consist of a list of string values
    output = []
    for i in data:
        # To be a senior, a member must be at least 55 years old 
        # and have a handicap greater than 7
        if i[0] > 54 and i[1] > 7:
            output.append('Senior')
        else:
            output.append('Open')
    return output
