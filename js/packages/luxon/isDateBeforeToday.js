const { DateTime } = require("luxon");

/**
 * cehck if a date is before now in a specified timezone
 * @param {string} date
 * @param {string} timezone
 * @param {string} format
 * @returns boolean
 */
function isDateBeforeNow(date, timezone, format = "yyyy-MM-dd") {
  const dateToCompare = date
    ? DateTime.fromFormat(date, format, { zone: timezone })
    : DateTime.now().plus(ONE_HUNDRED_YEAR_DURATION);

  console.log(dateToCompare);

  const diff = dateToCompare
    .diff(DateTime.now().setZone(timezone), "hours")
    .toObject();

  return diff.hours ? diff.hours < 0 : false;
}
