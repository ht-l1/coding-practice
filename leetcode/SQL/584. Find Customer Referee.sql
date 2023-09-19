# Write your MySQL query statement below
# We include customers where "referee_id" IS NULL, which means they don't have a referee (not referred by anyone), OR where "referee_id" is not equal to 2, which means they are not referred by customer ID 2.
SELECT name
FROM Customer
WHERE referee_id <> 2 OR referee_id IS NULL