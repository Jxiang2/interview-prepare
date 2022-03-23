function bsearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        mid = (left + right) / 2;
        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}