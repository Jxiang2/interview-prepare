function searchRange (nums: number[], target: number): number[] {
    let l: number = 0;
    let r: number = nums.length - 1;

    while (l <= r) {
        let mid: number = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            let first: number = mid;
            let last: number = mid;
            while (nums[first - 1] === target || nums[last + 1] === target) {
                if (nums[first - 1] === target) {
                    first--;
                }
                if (nums[last + 1] === target) {
                    last++;
                }
            }
            return [first, last];
        }
    }

    return [-1, -1];
};

console.log(searchRange([2, 2], 3));