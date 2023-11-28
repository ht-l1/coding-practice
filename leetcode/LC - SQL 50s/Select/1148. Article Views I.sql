# Write your MySQL query statement below
# the table may have duplicate rows >> DISTINCT

# Note that equal author_id and viewer_id indicate the same person
# Write a solution to find all the authors that viewed at least one of their own articles
# >> author_id = viewer_id

SELECT DISTINCT author_id AS id 
FROM Views
WHERE author_id = viewer_id
ORDER BY id