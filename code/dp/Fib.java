// memo (top-down)
// n:    0, 1, 2, 3, 4, 5, 6, 7 ...
// f(n): 0, 1, 1, 2, 3, 5, 8, 13 ...
// runtime: O(n)

package code.dp;

import java.util.HashMap;
import java.util.Map;

class Fib {
  public long fibMemo(final int n, final Map<Integer, Long> memo) {
    if (memo.containsKey(n))
      return memo.get(n);

    if (n == 0)
      return 0;
    if (n == 1)
      return 1;

    memo.put(n, fibMemo(n - 1, memo) + fibMemo(n - 2, memo));

    return memo.get(n);
  }

  public long fibTab(final int n) {
    final int[] table = new int[n + 1];
    table[0] = 0;
    table[1] = 1;

    for (int i = 2; i <= n; i++) {
      // recurence relation
      table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
  }

  public static void main(final String[] args) {
    final Fib solution = new Fib();
    System.out.println(solution.fibMemo(7, new HashMap<Integer, Long>()));
    System.out.println(solution.fibTab(7));
  }
}
