package code.bs;

/**
 * Note: In a search problem, if we are sure that the target can be found in 1
 * side of the midpoint after consider 1 condition, we can use binary search
 */
public class Bsearch {
  public int binarySearch(final int[] sortedArray, final int key) {
    int start = 0;
    int end = sortedArray.length - 1;
    while (start <= end) {
      final int mid = start + (end - start) / 2;
      if (key == sortedArray[mid]) // condition 0
        return mid;

      if (key < sortedArray[mid]) // condition 1
        end = mid - 1;
      else if (key > sortedArray[mid]) // conditon 2
        start = mid + 1;

    }
    return -1;
  }
}
