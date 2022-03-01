/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log(m+n)).
 */

function findMedianSortedArrays (nums1: number[], nums2: number[]): number {
    const mergedArr: number[] = [...nums1, ...nums2].sort((a, b) => a - b);
    const half: number = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 == 0
        ? (mergedArr[half - 1] + mergedArr[half]) / 2
        : mergedArr[half];
};