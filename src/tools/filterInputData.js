import { format, intervalToDuration, add, sub } from "date-fns"

const filterInputData = (values) => {
  const { destination, startDate, endDate, budgetLevel, numberOfPeople, currency } = values

  // Really just adding some on here
  return Object.assign(values, {
    startDateString: format(startDate, "yyyy-MM-dd"),
    endDateString: format(endDate, "yyyy-MM-dd"),
    forecastStartDate: format(sub(startDate, { years: 1 }), "yyyy-MM-dd"),
    forecastEndDate: format(sub(endDate, { years: 1 }), "yyyy-MM-dd"),
    duration: intervalToDuration({ start: startDate, end: endDate })
  })
}

export default filterInputData
