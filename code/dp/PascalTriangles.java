package code.dp;

import java.util.*;

class PascalTriangles {
    public List<List<Integer>> generate(final int numRows) {
        final List<List<Integer>> triangle = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            final List<Integer> layer = new ArrayList<>();

            layer.add(0, 1);

            for (int j = 0; j < i - 1; j++)
                layer.add(triangle.get(i - 1).get(j) + triangle.get(i - 1).get(j + 1));

            if (i > 0)
                layer.add(i, 1);

            triangle.add(layer);
        }
        return triangle;
    }
}
