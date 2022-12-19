// Montreal timezone: UTC-5 ===> Montreal time + 5h = UTC time

const { DateTime } = require("luxon");

// gives Datetime object in local timezone
const dateTime1 = DateTime.fromISO("2022-12-17T03:50:00+0000");
console.log(dateTime1);

// gives Datetime object in specified timezone
const dateTime2 = DateTime.fromISO("2022-12-17T03:50:00+0000", { zone: "utc" });
console.log(dateTime2);
const dateTime3 = DateTime.fromISO("2022-12-17T03:50:00+0000", {
  zone: "Europe/Kiev",
});
console.log(dateTime3);
