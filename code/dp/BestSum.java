// bestSum(7, [5, 3, 4, 7]) => [7]
// canSum(7, [1, 2]) => null
// canSum(0, [...]) => []
// runtime: O(tartgetSum * tartgetSum * len(numbers))

package code.dp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class BestSum {
  public List<Integer> bestSumMemo(
      final int targetSum,
      final int[] numbers,
      final Map<Integer, List<Integer>> memo) {
    if (memo.containsKey(targetSum))
      return memo.get(targetSum);

    if (targetSum == 0)
      return new ArrayList<>();
    if (targetSum < 0)
      return null;

    // each call that does not result into the base cases has children,
    // thus need shortestTemp
    List<Integer> shortestTemp = null;

    for (final int candidate : numbers) {
      final int reminder = targetSum - candidate;
      final List<Integer> temp = bestSumMemo(reminder, numbers, memo);
      if (temp != null) {
        final List<Integer> newTemp = new ArrayList<>();
        newTemp.addAll(temp);
        newTemp.add(candidate);

        if (shortestTemp == null || newTemp.size() < shortestTemp.size())
          shortestTemp = newTemp;
      }
    }

    memo.put(targetSum, shortestTemp);
    return memo.get(targetSum);
  }

  public static void main(final String[] args) {
    final BestSum solution = new BestSum();
    System.out.println(
        solution.bestSumMemo(
            7,
            new int[] { 4, 3 },
            new HashMap<>()));

    System.out.println(
        solution.bestSumMemo(
            8,
            new int[] { 2, 3, 5 },
            new HashMap<>()));

    System.out.println(
        solution.bestSumMemo(
            300,
            new int[] { 7, 14 },
            new HashMap<>()));

    System.out.println(
        solution.bestSumMemo(
            100,
            new int[] { 1, 2, 5, 25 },
            new HashMap<>()));
  }
}