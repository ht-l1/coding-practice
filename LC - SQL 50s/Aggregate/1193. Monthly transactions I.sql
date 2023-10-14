# Write your MySQL query statement below
# Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.

SELECT 
SUBSTR(trans_date, 1, 7) AS month, 
country, 
COUNT(id) AS trans_count, 
SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count, 
SUM(amount) AS trans_total_amount, 
SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) approved_total_amount
FROM Transactions
GROUP BY month, country