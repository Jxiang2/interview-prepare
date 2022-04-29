// Given an array a that contains only numbers in the range from 1 to a.length, 
// find the first duplicate number for which the second occurrence has the minimal index. 
// In other words, if there are more than 1 duplicated numbers, return the number 
// for which the second occurrence has a smaller index than the second occurrence of the other number does. 
// If there are no such elements, return -1.
// a = [2, 1, 3, 5, 3, 2], solution(a) = 3

function firstDuplicate (arr: number[]) {

    let numSet: Set<number> = new Set();

    for (let i = 0; i < arr.length; i++) {
        let num: number = arr[i];
        if (!numSet.has(num)) {
            numSet.add(num);
        } else {
            return num;
        }
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([1, 6, 8, 5, 3, 7, 8, 3, 8, 5, 1]));