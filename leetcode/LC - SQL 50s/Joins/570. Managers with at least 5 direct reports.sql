# Write your MySQL query statement below

#  This self-join allows us to pair each employee with their manager
# ON.. we match the id of the manager (E1) with the managerId of the direct report (E2)
# GROUP BY.. this will correctly find managers who have at least five direct reports and exclude employees who do not have managers (those with a null managerId)

SELECT e1.name
FROM Employee AS e1
INNER JOIN Employee AS e2
ON e1.id = e2.managerId 
GROUP BY e1.id, e1.name
HAVING COUNT(e2.id) >= 5;