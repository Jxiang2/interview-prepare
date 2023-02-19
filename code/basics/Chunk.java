package code.basics;

import java.util.ArrayList;
import java.util.List;

/**
 * chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 */
public class Chunk {
  public List<List<Integer>> chunk(final int[] arr, final int size) {
    final List<List<Integer>> chunked = new ArrayList<>();
    chunked.add(new ArrayList<>());

    for (final int element : arr) {
      final List<Integer> last = chunked.get(chunked.size() - 1);
      if (last == null || last.size() == size)
        chunked.add(new ArrayList<>(List.of(element)));
      else
        last.add(element);
    }

    return chunked;
  }
}
