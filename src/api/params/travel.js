import getGenericRapidAPIOptions from "./getGenericRapidAPIOptions"

const baseURL = "travel-advisor.p.rapidapi.com"
const language = "en_US"
const units = "km"
const currency = "AUD"

// These definitely subject to change
const itemLimit = "10"
const maxRadius = "20"


// Here we need to get the lat,long coordinates of our destination to use in further API calls to travel advisor
const locationsEndpoint = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete" 
const getTravelLocationOptions = (destination) => {
  return (
    getGenericRapidAPIOptions(baseURL, locationsEndpoint, {
      query: destination,
      lang: language,
      units: units,
    })
  )
}

// Getting restaurants using lat,long
const restaurantsEndpoint = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng"
const getRestaurantOptions = (latitude, longitude) => {
  return (
    getGenericRapidAPIOptions(baseURL, restaurantsEndpoint, {

    })
  )
}


export default getTravelLocationOptions