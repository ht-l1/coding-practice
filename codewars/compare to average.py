# There was a test in your class. You want to know if you're better than the average student in your class.
# You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Return True if you're better, else False!

# Though Process:
# 1. Calculate the average of your peers' test scores.
# 2. Compare your test score with the calculated average.
# 3. Return True if your score is higher than the average, else return False.

def better_than_average(class_points, your_points):
    average_score = sum(class_points) / len(class_points)
    return your_points > average_score