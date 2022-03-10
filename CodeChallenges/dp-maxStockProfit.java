package CodeChallenges;

class MaxStockProfit {
    public int maxProfit(int[] prices) {

        int i = 0;
        int maxProfit = 0;

        while (i < prices.length - 1) {
            if (prices[i] < prices[i + 1])
                maxProfit += (prices[i + 1] - prices[i]);
            i++;
        }

        return maxProfit;
    }
}
