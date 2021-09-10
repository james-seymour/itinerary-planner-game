import getGenericRapidAPIOptions from "./getGenericRapidAPIOptions"

const baseURL = "travel-advisor.p.rapidapi.com"
const language = "en_US"
const units = "km"

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
const getRestaurantOptions = (latitude, longitude, currency) => {
  return (
    getGenericRapidAPIOptions(baseURL, restaurantsEndpoint, {
      // Required
      latitude: latitude,
      longitude: longitude,
      // Optional
      // Could change this current to an input
      currency: currency,
      open_now: "false",
      lunit: units,
      lang: language,
    })
  )
}

// Getting attractions using lat,long
const attractionsEndpoint = "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng"
const getAttractionOptions = (latitude, longitude, currency) => {
  return (
    getGenericRapidAPIOptions(baseURL, attractionsEndpoint, {
      latitude: latitude,
      longitude: longitude,
      // Same thing here as above in restaurant
      lunit: units,
      currency: currency,
      lang: language,
      distance: maxRadius,
    })
  )
}


export { getTravelLocationOptions, getRestaurantOptions, getAttractionOptions }