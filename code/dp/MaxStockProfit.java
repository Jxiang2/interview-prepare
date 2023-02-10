/**
 * You are given an integer array prices where 
 * prices[i] is the price of a given stock on the ith day.
 * 
 * On each day, you may decide to buy and/or sell
 * the stock. You can only hold at most one share 
 * of the stock at any time. However, you can 
 * buy it then immediately sell it on the same day.
 * 
 * Find and return the maximum profit you can achieve.
 */

package code.dp;

class MaxStockProfit {
    public int maxProfit(final int[] prices) {
        int minprice = Integer.MAX_VALUE;
        int maxprofit = 0;

        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minprice)
                minprice = prices[i];
            else if (prices[i] - minprice > maxprofit)
                maxprofit = prices[i] - minprice;
        }

        return maxprofit;
    }
}
