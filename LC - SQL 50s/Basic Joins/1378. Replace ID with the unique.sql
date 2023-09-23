--  Write your MySQL query statement below
--  using LEFT JOIN because we want all records from Employees table regardless it's in EmployeeUNI table or not 

SELECT EmployeeUNI.unique_id, Employees.name
FROM Employees
LEFT JOIN EmployeeUNI
ON Employees.id = EmployeeUNI.id;