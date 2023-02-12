package code.basics;

class MaxStockProfit {

    /**
     * choosing a single day to buy one stock and choosing a different day in the
     * future to sell that stock
     * 
     * Input: prices = [7,1,5,3,6,4]
     * Output: 5
     * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit =
     * 6-1 = 5.
     * Note that buying on day 2 and selling on day 1 is not allowed because you
     * must buy before you sell.
     */
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

    /**
     * On each day, you may decide to buy and/or sell the stock.
     * trick: count every vally and peak combo
     * 
     * Input: prices = [7,1,5,3,6,4]
     * Output: 7
     * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit =
     * 5-1 = 4.
     * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 =
     * 3.
     * Total profit is 4 + 3 = 7.
     */
    public int maxProfit2(final int[] prices) {
        int i = 0;
        int valley = prices[0];
        int peak = prices[0];
        int maxprofit = 0;
        while (i < prices.length - 1) {
            while (i < prices.length - 1 && prices[i] >= prices[i + 1])
                i++;
            valley = prices[i];
            while (i < prices.length - 1 && prices[i] <= prices[i + 1])
                i++;
            peak = prices[i];
            maxprofit = maxprofit + peak - valley;
        }
        return maxprofit;
    }
}
