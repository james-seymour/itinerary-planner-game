import getGenericRapidAPIOptions from "./getGenericRapidAPIOptions"



const baseURL = "meteostat.p.rapidapi.com"

// meteostat first API call to get a weather station ID will use lat and long which we need to get from travel advisor API
const nearbyStationsEndpoint = "https://meteostat.p.rapidapi.com/stations/nearby"
const getNearbyStationOptions = (latitude, longitude) => {
  return (
    getGenericRapidAPIOptions(baseURL, nearbyStationsEndpoint, {
      lat: latitude,
      lon: longitude,
    })
  )
}

// From here we can get weather conditions between a start and end date
// We only get hourly options for conditions unfortuanelyt. 
// Might just have to ceebs this and use one hour weather condition for the whole start-end time
const weatherConditionEndpoint = "https://meteostat.p.rapidapi.com/stations/hourly"
const getWeatherConditionOptions = (stationId, startDate) => {
  return (
    getGenericRapidAPIOptions(baseURL, weatherConditionEndpoint, {
      station: stationId,
      start: startDate,
      // Same day just means we only check this day because its hourly updating
      end: startDate,
    })
  )
}

const weatherHistoryEndpoint = "https://meteostat.p.rapidapi.com/stations/daily"
const getWeatherHistoryOptions = (stationId, startDate, endDate) => {
  return (
    getGenericRapidAPIOptions(baseURL, weatherHistoryEndpoint, {
      station: stationId,
      start: startDate,
      end: endDate,
    })
  )
}