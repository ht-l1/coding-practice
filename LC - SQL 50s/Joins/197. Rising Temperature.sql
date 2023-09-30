# Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
# Join a weather table with itself

SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;