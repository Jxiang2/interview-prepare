/**
 * Sum hourses
 * @param {string} hoursA - hh:mm:ss
 * @param {string} hoursB - hh:mm:ss
 * @param {string[]} hoursList - remaining hourses
 * @returns string - hh:mm:ss
 */
function sumHours(hoursA, hoursB, hoursList = []) {
  const unitSeconds = [3600, 60, 1];

  let sumInSeconds = [hoursA, hoursB, ...hoursList]
    .map((time) =>
      time.split(":").reduce((subSum, value, i) => {
        return subSum + unitSeconds[i] * Number(value);
      }, 0),
    )
    .reduce((a, b) => a + b, 0);

  return unitSeconds
    .map((unitSeconds) => {
      const value = Math.floor(sumInSeconds / unitSeconds);
      sumInSeconds %= unitSeconds;
      return value;
    })
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}

const x = sumHours("24:30:30", "00:30:30");
console.log(x);
