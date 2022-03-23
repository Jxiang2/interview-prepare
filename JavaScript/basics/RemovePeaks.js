// You are given numbers, an array of pairwise distinct positive integers.
// Let's call an element of this array a peak if it is greater than all its existing neighboring elements.
// Remove all peaks in an increasing order

function solution (numbers) {
	let ary = [...numbers];
	let results = [];

	while (ary.length > 0) {
		let peaks = [];
		for (let i = 0; i < ary.length; i++) {
			if (ary.length === 1) peaks.push(ary[i]);
			else if (ary[i] > ary[i + 1] && !ary[i - 1]) peaks.push(ary[i]);
			else if (ary[i] > ary[i - 1] && !ary[i + 1]) peaks.push(ary[i]);
			else if (ary[i - 1] < ary[i] < ary[i + 1]) peaks.push(ary[i]);
		}

		let min = Math.min(...peaks);
		results.push(min);
		const minPeakIndex = ary.indexOf(min);
		ary.splice(minPeakIndex, 1);
	}
	return results;
}

console.log(solution([2, 4, 1, 7, 9]));
