const { DateTime } = require("luxon");
/**
 *  Montreal timezone: UTC-5 (winter) ===> Montreal time + 5h = UTC time
 * 2022-12-17    T     03:50:00          +0000
 *   date                time        offset(timezonex)
 */

// return a Datetime object in local timezone
const dateTime1 = DateTime.fromISO("2022-12-17T03:50:00+0000"); // +0000 means UTC
console.log(dateTime1);
console.log(dateTime1.toISO());
// ------------------------------------------------------
console.log("--------------------------------------------");

// return a Datetime object in specified timezone (c changed)
const dateTime2 = DateTime.fromISO("2022-12-17T03:50:00+0000", {
  zone: "Europe/Paris", // UTC+1
});
console.log(dateTime2);

const dateTime3 = dateTime2.setZone("Europe/Kiev"); // UTC+2
console.log(dateTime3);
// ------------------------------------------------------
console.log("--------------------------------------------");

// give a Datetime object, do not change datetime values, but set a timezone to it
const current = DateTime.fromISO("2022-12-25T00:00:00", {
  zone: "Europe/Paris",
});
// The date and time specified in the current.toString() was interpreted as a Parisian local time
// (i.e. it's the time that corresponds to what would be called 9:10 there).
console.log(current);
console.log(current.toISO());
// ------------------------------------------------------
console.log("--------------------------------------------");

// convert a Datetime to another timezone, but keeping the values the same (Full example)

const dateTimeFromServer = "2023-01-23T00:00:00.000+00:00";

const viewerLocalDate = DateTime.fromISO(dateTimeFromServer, {
  zone: "Europe/Kiev",
});

console.log(viewerLocalDate.toISO());

const startHoursObject = DateTime.fromObject({
  hour: 5,
  minute: 15,
}).toObject();

console.log(startHoursObject);

const final = viewerLocalDate.set({
  hour: startHoursObject.hour,
  minute: startHoursObject.minute,
});

console.log(final.toISO());
// ------------------------------------------------------
console.log("--------------------------------------------");

// Create datetimes based on year, month, day, hour, minute, second, and timezone, or defailt system timezone
const ldt1 = DateTime.fromObject(
  {
    year: 2017,
    month: 5,
    day: 15,
    hour: 17,
    minute: 36,
  },
  { zone: "America/Montreal" },
);
console.log(ldt1);

const ldt2 = DateTime.fromObject(
  {
    year: 2017,
    month: 5,
    day: 15,
    hour: 20,
    minute: 0,
  },
  { zone: "America/Montreal" },
);
console.log(ldt2);

// Compare
console.log(ldt1 < ldt2);

console.log(DateTime.now().minus({ day: -1 }).weekday);
