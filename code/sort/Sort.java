package code.sort;

import java.util.Arrays;

public class Sort {
  private void swap(final int idx1, final int idx2, final int[] arr) {
    final int lesser = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = lesser;
  }

  // O(n^2)
  // constantly swap elements of an array in the inner for loop get find the
  // largest element and put at end
  public int[] bubbleSort(final int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1, arr);
        }
      }
    }
    return arr;
  }

  // O(n^2)
  // set a indexOfMin at outer for loop and prove it is wrong using a inner for
  // loop, then swap if the orginal indexOfMin changes
  public int[] selectionSort(final int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      int idxMin = i;
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[idxMin])
          idxMin = j;
      }
      if (idxMin != i) {
        swap(i, idxMin, arr);
      }
    }
    return arr;
  }

  // O(nlogn), divide and conqure
  // divde the array to arrays with single elememnt, and then use merge() on each
  // of the single-element array pair
  public int[] mergeSort(final int[] arr) {
    final int size = arr.length;
    if (size < 2)
      return arr;
    final int mid = (int) Math.floor(size / 2);
    final int[] lArr = new int[mid];
    final int[] rArr = new int[size - mid];

    for (int i = 0; i < mid; i++) {
      lArr[i] = arr[i];
    }
    for (int i = mid; i < size; i++) {
      rArr[i - mid] = arr[i];
    }

    mergeSort(lArr);
    mergeSort(rArr);
    merge(arr, lArr, rArr, mid, size - mid);

    return arr;
  }

  private void merge(
      final int[] arr,
      final int[] lArr,
      final int[] rArr,
      final int left,
      final int right) {
    int i = 0, j = 0, k = 0;

    while (i < left && j < right) {
      if (lArr[i] <= rArr[j])
        arr[k++] = lArr[i++];
      else
        arr[k++] = rArr[j++];
    }

    // make sure the remaining elements in either lArr or rArr are counted
    if (i < left) {
      while (i < left) {
        arr[k++] = lArr[i++];
      }
    } else {
      while (j < right) {
        arr[k++] = rArr[j++];
      }
    }
  }

  public static void main(final String[] args) {
    final Sort solution = new Sort();
    System.out.println(Arrays.toString(
        solution.bubbleSort(new int[] { 8, 7, 6, 5, 0, 25, 14, 20, 4, 3, 1 })));
    System.out.println(Arrays.toString(
        solution.selectionSort(new int[] { 8, 7, 6, 5, 0, 25, 14, 20, 4, 3, 1 })));
    System.out.println(Arrays.toString(
        solution.mergeSort(new int[] { 8, 7, 6, 5, 0, 25, 14, 20, 4, 3, 1 })));
  }

}
