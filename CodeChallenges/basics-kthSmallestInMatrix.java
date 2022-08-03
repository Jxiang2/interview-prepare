/**
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the sortedmatrix are
 * [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
 */

package CodeChallenges;

class KthSmallestInMatrix {
  public int lessEqual(int[][] matrix, int target) {
    int count = 0;
    int len = matrix.length;
    int i = len - 1;
    int j = 0;

    while (i >= 0 && j < len) {
      if (matrix[i][j] > target) {
        i--;
      } else {
        count = count + i + 1;
        j++;
      }
    }
    return count;
  }

  public int kthSmallest(int[][] matrix, Integer k) {
    int n = matrix.length;
    int low = matrix[0][0];
    int high = matrix[n - 1][n - 1];

    while (low < high) {
      int mid = low + (high - low) / 2;
      int count = lessEqual(matrix, mid);

      if (count < k) {
        low = mid + 1;
      } else {
        high = mid;
      }
      System.out.println(count);
    }

    return low;
  }

  public static void main(String[] args) {
    KthSmallestInMatrix sol = new KthSmallestInMatrix();
    int res = sol.kthSmallest(new int[][] { { 1, 5, 20 }, { 10, 11, 15 }, { 12, 13, 14 } }, 6);
    System.out.println(res);
  }
}