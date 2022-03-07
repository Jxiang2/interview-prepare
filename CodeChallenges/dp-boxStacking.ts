/**
 * Given n boxes with Lengths, Widths and heights.
 * Box(Li, Wi, Hi) can be placed on top of Box(Lj, Wj, Hj)
 * if Li < Lj; Wi < Wj 
 * 
 * Find the stacked box height
 * Subproblem: largest height of stack with box 
 * (Li, Wi, Hi) at bottom
 */

function canBeStacked (top: number[], bottom: number[]) {
    return top[0] < bottom[0] && top[1] < bottom[1];
}

function boxStacking (boxes: number[][]): number {

    interface LooseObj {
        [key: (string | number)]: number;
    }

    let heights: LooseObj = {};
    boxes.forEach((box, idx) => (heights[idx] = box[2]));

    for (let i = 1; i < boxes.length; i++) {
        let box = boxes[i];
        let choices = [];
        for (let j = 0; j < i; j++) {
            let top = boxes[j];
            canBeStacked(top, box) && choices.push(heights[j]);
        }

        choices.length > 0
            ? heights[i] = box[2] + Math.max(...choices)
            : heights[i] = box[2];
    }

    return Math.max(...Object.values(heights));
}



console.log(boxStacking([
    [1, 2, 2], [2, 3, 2],
    [1, 5, 4], [2, 4, 1],
    [3, 6, 2], [4, 5, 3]
]));


