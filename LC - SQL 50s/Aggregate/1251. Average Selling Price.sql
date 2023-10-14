-- # Write a solution to find the average selling price for each product. average_price should be rounded to 2 decimal places.

-- # prices change so we need match them up
-- # each product_id has an averagePrice

SELECT p.product_id, IFNULL(ROUND(SUM(p.price*u.units)/SUM(u.units),2),0) AS average_price
FROM Prices p
LEFT JOIN UnitsSold u
ON p.product_id = u.product_id
AND u.purchase_date BETWEEN start_date AND end_date
GROUP BY product_id