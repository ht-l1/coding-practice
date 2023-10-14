-- # Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.
-- # You need to first determine the earliest order for each customer before calculating the percentage of immediate orders among these first orders. 

-- Inside the avg() function, the expression order_date = customer_pref_delivery_date returns 1 for rows where the order date is the same as the preferred delivery date (immediate orders), and 0 otherwise (scheduled orders). 
-- The avg() function then calculates the average of these 0s and 1s, which gives the proportion of immediate orders among the first orders.
Select 
    round(avg(order_date = customer_pref_delivery_date)*100, 2) as immediate_percentage
from Delivery
-- The outer query then filters the Delivery table to only include rows where (customer_id, order_date) is in the result of the subquery. 
-- This effectively filters the table down to only the first orders for each customer.
where (customer_id, order_date) in (
    -- below finds the first (earliest) order for each customer
    -- it groups the Delivery table by customer_id and selects the minimum order_date for each group
  Select customer_id, min(order_date) 
  from Delivery
  group by customer_id
);