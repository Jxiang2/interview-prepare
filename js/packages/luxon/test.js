// Montreal timezone: UTC-5 ===> Montreal time + 5h = UTC time
// 2022-12-17    T     03:50:00          +0000
//   date                time        offset(timezonex)

const { DateTime } = require("luxon");

// give a Datetime object in local timezone
const dateTime1 = DateTime.fromISO("2022-12-17T03:50:00+0000");
console.log(dateTime1);

// give a Datetime object in specified timezone
const dateTime2 = DateTime.fromISO("2022-12-17T03:50:00+0000", { zone: "utc" });
console.log(dateTime2);
const dateTime3 = DateTime.fromISO("2022-12-17T03:50:00+0000", {
  zone: "Europe/Kiev",
});
console.log(dateTime3);

// give a Datetime object, do not change datetime values, but set a timezone to it
const current = DateTime.fromISO("2022-12-25T00:00:00", {
  zone: "Europe/Paris",
});
// The date and time specified in the current.toString() was interpreted as a Parisian local time
// (i.e. it's the time that corresponds to what would be called 9:10 there).
console.log(current);
console.log(current.toString());
console.log(current.toISODate());
