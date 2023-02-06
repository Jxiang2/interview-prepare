package code.dp;

import java.util.HashMap;
import java.util.Map;

// how many ways travel from mxn top left to bottom right
// if move only left and botton?
//    c
// *  *  * 
// *  *  *   r
// *  *  *
// runtime: O(c+r)
class GridTravel {

  public long gridTravelMemo(
      final int r,
      final int c,
      final Map<String, Long> memo) {
    final String key = r + "," + c;
    final String reversedKey = c + "," + r;

    if (memo.containsKey(key) || memo.containsKey(reversedKey)) {
      return memo.getOrDefault(key, memo.get(reversedKey));
    }

    if (r == 0 || c == 0)
      // trivial
      return 0;
    if (r == 1 || c == 1)
      // nopn-trivial
      return 1;

    // D + R
    final long value = gridTravelMemo(r - 1, c, memo) + gridTravelMemo(r, c - 1, memo);
    memo.put(key, value);

    return memo.get(key);
  }

  public long gridTravelTab(final int r, final int c) {
    final long[][] table = new long[r + 1][c + 1];
    for (int i = 1; i <= r; i++) {
      for (int j = 1; j <= c; j++) {
        if (i == 1 && j == 1)
          table[i][j] = 1;
        else
          // T + L
          table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }
    return table[r][c];
  }

  public static void main(final String[] args) {
    final GridTravel solution = new GridTravel();
    System.out.println(
        solution.gridTravelMemo(7, 7, new HashMap<String, Long>()));

    System.out.println(
        solution.gridTravelTab(7, 7));

  }

}
