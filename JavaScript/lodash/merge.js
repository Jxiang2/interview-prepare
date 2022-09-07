const { merge } = require("lodash")

const prevState = {
  "1": {
    attributes: {
      identity: null,
      microServiceId: "3kd20dj23ij",
      nahdi: false,
      settings: {
        allowFutureManualTimecardApprove: true,
        disableEmployeeProfileEdit: true,
        earlyClockIn: true,
        earlyClockInLimit: 65
      }
    },
    id: "1",
    type: "companies",
    links: {}
  }
}

// new state to merge
const newCompanyId = "1"
const newSettings = {
  allowFutureManualTimecardApprove: true,
  autoGenerateShiftTitle: true,
  disableEmployeeProfileEdit: true,
  earlyClockIn: true,
  earlyClockInLimit: 65
}

// merge result
const result = merge({}, prevState, {
  [newCompanyId]: {
    attributes: {
      settings: newSettings,
    },
  },
})

console.log(result["1"].attributes.settings)
