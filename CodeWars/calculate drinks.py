# Nathan loves cycling.
# he drinks 0.5 litres of water per hour of cycling.
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# best solution
def litres(time):
    return time // 2

# my solution
def litres(time):

    water_intake_liters = time * 0.5
    return int(water_intake_liters)