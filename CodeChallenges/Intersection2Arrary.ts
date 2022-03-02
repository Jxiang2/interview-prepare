function intersect (nums1: number[], nums2: number[]): number[] {

    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = 0;
    let result: number[] = [];

    while (p1 <= nums1.length && p2 <= nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.push(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] > nums2[p2]) {
            p2++;
        } else {
            p1++;
        }
    }

    return result;
};

console.log(intersect([1, 3, 4, 7, 6, 4, 2], [7, 3, 4, 10, 2, 4, 2]));