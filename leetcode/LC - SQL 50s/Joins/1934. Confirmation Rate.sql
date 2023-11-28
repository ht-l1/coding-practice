-- to display confirmation_rate , we need to find average using aggregation function avg(), here using if clause we specified that if action is confirmed we count it as 1 and else if null or timeout we will count it as 0.
-- the IF function evaluation EACH ROW.. therefore will have the count of confirmed.. (1+1+1...)
-- AVG(...) calculates the average of these 1s and 0s.

SELECT s.user_id, round(avg(if(c.action="confirmed",1,0)),2) AS confirmation_rate
FROM Signups AS s 
LEFT JOIN Confirmations AS c 
ON s.user_id= c.user_id 
GROUP BY user_id;