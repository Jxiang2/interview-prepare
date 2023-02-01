// bestSum(7, [5, 3, 4, 7]) => [7]
// canSum(7, [1, 2]) => null
// canSum(0, [...]) => []
// runtime: O(tartgetSum^2*len(numbers))

package code.dp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class BestSum {
  public List<Integer> bestSum(
      int targetSum,
      int[] numbers,
      Map<Integer, List<Integer>> memo) {
    if (memo.containsKey(targetSum))
      return memo.get(targetSum);

    if (targetSum == 0)
      return new ArrayList<>();
    if (targetSum < 0)
      return null;

    // each call that does not result into the base cases has children,
    // thus need shortestTemp
    List<Integer> shortestTemp = null;

    for (int candidate : numbers) {
      int reminder = targetSum - candidate;
      List<Integer> temp = bestSum(reminder, numbers, memo);
      if (temp != null) {
        List<Integer> newTemp = Stream
            .concat(temp.stream(), List.of(candidate).stream())
            .collect(Collectors.toList());

        if (shortestTemp == null || newTemp.size() < shortestTemp.size())
          shortestTemp = newTemp;
      }
    }

    memo.put(targetSum, shortestTemp);
    return memo.get(targetSum);
  }

  public static void main(String[] args) {
    BestSum solution = new BestSum();
    System.out.println(
        solution.bestSum(
            100,
            new int[] { 1, 2, 5, 25 },
            new HashMap<>()));
  }
}