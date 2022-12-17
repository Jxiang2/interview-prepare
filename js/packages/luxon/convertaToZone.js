const { DateTime } = require("luxon");

/**
 * convert a luxon datetime object to another luxon datetime object with target timezone
 * @param {DateTime} DateTime object
 * @param {string} targetTimeZone
 * @returns {DateTime}
 */
function convertToZone(dateTime, targetTimeZone) {
  return dateTime.setZone(targetTimeZone);
}

module.exports = convertToZone;
