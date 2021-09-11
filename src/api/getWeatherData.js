import axios from "axios"
import { getNearbyStationOptions, 
  getWeatherConditionOptions, 
  getWeatherHistoryOptions 
} from "./params/meteostat"

const getWeatherData = (values, APIData, setRedirect) => {
  const { latitude, longitude } = APIData
  const { forecastStartDate, forecastEndDate } = values
 
  const nearbyStationOptions = getNearbyStationOptions(latitude, longitude)
  axios.request(nearbyStationOptions).then((stationsResponse) => {
    return stationsResponse.data.data[0].id
  }).then((stationId) => {

    const weatherConditionOptions = getWeatherConditionOptions(stationId, forecastStartDate)
    const weatherHistoryOptions = getWeatherHistoryOptions(stationId, forecastStartDate, forecastEndDate)
    axios.request(weatherConditionOptions).then((weatherConditionResponse) => {
    axios.request(weatherHistoryOptions).then((weatherHistoryResponse) => {

      Object.assign(APIData, {
        weatherCondition: weatherConditionResponse.data.data,
        weatherHistory: weatherHistoryResponse.data.data,
      })

      setRedirect(true)
    }).catch((error) => { setRedirect(true) })
    }).catch((error) => { setRedirect(true) })
  }).catch((error) => { setRedirect(true) })
}

export default getWeatherData