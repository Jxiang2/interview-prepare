package CodeChallenges;

import java.util.*;

class BoxStacking {
    public boolean canBeStacked(int[] top, int[] bottom) {
        return top[0] < bottom[0] && top[1] < bottom[1];
    }

    public int boxStacking(int[][] boxes) {
        Map<Integer, Integer> heights = new HashMap<>();
        for (int i = 0; i < boxes.length; i++) {
            heights.put(i, boxes[i][2]);
        }

        for (int i = 0; i < boxes.length; i++) {
            int[] box = boxes[i];
            List<Integer> choices = new ArrayList<>();
            for (int j = 0; j < i; j++) {
                int[] top = boxes[j];
                if (canBeStacked(top, box))
                    choices.add(top[2]);
            }

            if (choices.size() > 0) {
                heights.put(i, box[2] + Collections.max(choices));
            }
        }

        int max = Collections.max(heights.values());
        return max;
    }
}