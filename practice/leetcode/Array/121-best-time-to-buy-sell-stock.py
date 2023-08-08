# You are given an array prices where prices[i] is the price of a given stock on the ith day.
# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if not prices:
            return 0
        
        min_price = prices[0]    #initialized to the price of the first day
        max_profit = 0           #initialized to 0 because we haven't found any profitability yet

        for price in prices:
            if price < min_price:
                min_price = price    #if price is lower, we update the minimum pricec to the new low
            else:
                max_profit = max(max_profit, price - min_price)    #otherwise price is higher which means profit.

        return max_profit
