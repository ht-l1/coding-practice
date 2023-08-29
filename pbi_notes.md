### DAX FUNCTION: CALCULATE()
CALCULATE(Expression, [Filter1], [FILTER2], ...)
```
CALCULATE(
    SUM(Sales[LinePrice]),
    Sales[ProductCategory] = "Bikes",
    YEAR(Sales[OrderDate]) = 2018
)
```

### Create a Date Table
`CALENDAR(<start_date>, <end_date>)`
`CALENDARAUTO(<fiscal_year_end_month>)`

