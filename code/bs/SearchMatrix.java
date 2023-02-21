/**
 * 
Write an efficient algorithm that searches for a value 
target in an m x n integer matrix matrix. This matrix has the 
following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 */

package code.bs;

class SearchMatrix {
    public boolean hasValue(final int[] row, final int target) {
        int l = 0;
        int r = row.length - 1;

        while (l <= r) {
            final int mid = l + (r - l) / 2;
            if (row[mid] > target) {
                r = mid - 1;
            } else if (row[mid] < target) {
                l = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }

    public boolean searchMatrix(final int[][] matrix, final int target) {
        if (matrix.length == 0) {
            return false;
        }

        for (int i = 0; i < matrix.length; i++) {
            final int[] row = matrix[i];
            if (hasValue(row, target)) {
                return true;
            }

        }

        return false;
    }
}