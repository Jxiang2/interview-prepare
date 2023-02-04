// memo (top-down)
// canSum(7, [5,4,3,7]) => [4, 3]
// canSum(7, [1, 2]) => null
// canSum(0, [...]) => []
// runtime: O(tartgetSum^2*len(numbers))

package code.dp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class HowSum {

  public List<Integer> howSumMemo(
      final int targetSum,
      final int[] numbers,
      final Map<Integer, List<Integer>> memo) {
    if (memo.containsKey(targetSum))
      return memo.get(targetSum);

    if (targetSum == 0)
      return new ArrayList<>();
    if (targetSum < 0)
      return null;

    for (final int candidate : numbers) {
      final int reminder = targetSum - candidate;
      final List<Integer> temp = howSumMemo(reminder, numbers, memo);
      if (temp != null) {
        final List<Integer> newTemp = new ArrayList<>();
        newTemp.addAll(temp);
        newTemp.add(candidate);

        memo.put(targetSum, newTemp);
        return memo.get(targetSum);
      }
    }

    memo.put(targetSum, null);
    return null;
  }

  public static void main(final String[] args) {
    final HowSum solution = new HowSum();
    System.out.println(
        solution.howSumMemo(
            7,
            new int[] { 4, 3 },
            new HashMap<>()));
  }

}
