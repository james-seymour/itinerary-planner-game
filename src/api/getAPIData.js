import axios from "axios"
import { getTravelLocationOptions } from "./params/travel"
import getHotelsData from "./getHotelsData"
import getRestaurantAttractionData from "./getRestaurantAttractionData"
import getWeatherData from "./getWeatherData"

const getAPIData = (values, APIData, redirects) => {

  // Need parsed values before we get here
  // APIData should be a ref to the top level APIData
  // Also need some way to redirect in here
  
  // Because we need to request two different APIs with the same lat long, we should get lat long before anytthing
  const locationOptions = getTravelLocationOptions(values.destination)  
  axios.request(locationOptions).then((locationResponse) => {
    return locationResponse.data.data.Typeahead_autocomplete.results[0].detailsV2.geocode
  }).then(({ latitude, longitude }) => {
    // Here, we save the lat, long of the destination in the APIData ref to use later 
    Object.assign(APIData, { latitude: latitude, longitude: longitude })
    // Now that we have this lat, long, we can call all of the three APIs
    getRestaurantAttractionData(values, APIData, redirects.travel)
    // getHotelsData(values, APIData, redirects.hotels)
    // getWeatherData(values, APIData, redirects.weather)
    // redirects.travel(true)
    redirects.weather(true)
    redirects.hotels(true)
  })

}

export default getAPIData