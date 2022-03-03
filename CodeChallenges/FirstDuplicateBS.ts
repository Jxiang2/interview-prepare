function findDuplicate (nums: number[]): number {
    let sortedNums = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            return sortedNums[i];
        }
    }
    return -1;
};

console.log(findDuplicate([3, 1, 3, 4, 2]));