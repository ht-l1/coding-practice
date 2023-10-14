-- # Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.

-- first line > one counts from the filtered table and one counts form the activity table
-- The COUNT(DISTINCT player_id) in the SELECT clause counts the number of unique player IDs in the filtered table, which represents the number of players that logged in on the day after their first login.
-- The subquery (SELECT COUNT(DISTINCT player_id) FROM Activity) counts the total number of unique player IDs in the Activity table, which represents the total number of players.
SELECT
  ROUND(COUNT(DISTINCT player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity), 2) AS fraction
FROM Activity
-- The outer query then filters the Activity table to only include rows where 
-- (player_id, DATE_SUB(event_date, INTERVAL 1 DAY)) is in the result of the subquery
WHERE
  (player_id, DATE_SUB(event_date, INTERVAL 1 DAY))
  IN (
    -- finds the first login date for each player
    SELECT player_id, MIN(event_date) AS first_login 
    FROM Activity 
    GROUP BY player_id
  )