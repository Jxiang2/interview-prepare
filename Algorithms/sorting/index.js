// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// O(n^2)
// constantly swap elements of an array in the inner for loop get find the largest element and put at end
function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<(arr.length-1)-i; j++) {
            if (arr[j] > arr[j+1]) {
                let lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr
}

// O(n^2)
// set a indexOfMin at outer for loop and prove it is wrong using a inner for loop, then swap if the orginal indexOfMin changes
function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let indexOfMin = i
        for (let j=i+1; j <arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

// O(nlogn), divide and conqure
// divde the array to arrays with single elememnt, and then use merge() on each of the single-element array pair
function mergeSort(arr) {
    // key part for dividing the whole ary to single-element subarrays
    if (arr.length === 1) {
        return arr
    }

    const ceneterIndex = Math.floor(arr.length/2)
    const left = arr.slice(0, ceneterIndex)
    const right = arr.slice(ceneterIndex, arr.length)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results = []
    while (left.length > 0 && right.length > 0) {
        (left[0] < right[0]) 
        ? results.push(left.shift()) 
        : results.push(right.shift())
    }
    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
