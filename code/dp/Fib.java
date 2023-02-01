package code.dp;

import java.util.HashMap;
import java.util.Map;

// memo (top-down)
// n:    0, 1, 2, 3, 4, 5, 6, 7 ...
// f(n): 0, 1, 1, 2, 3, 5, 8, 13 ...
// runtime: O(n)
class Fib {
  public long fibN(int n, Map<Integer, Long> memo) {
    if (memo.containsKey(n))
      return memo.get(n);

    if (n == 0)
      return 0;
    if (n == 1)
      return 1;

    memo.put(n, fibN(n - 1, memo) + fibN(n - 2, memo));

    return memo.get(n);
  }

  public static void main(String[] args) {
    Fib solution = new Fib();
    System.out.println(
        solution.fibN(50, new HashMap<Integer, Long>()));
  }
}
