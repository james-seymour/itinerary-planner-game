import axios from "axios"
import getGenericRapidAPIOptions from "./getGenericRapidAPIOptions"

// THESE VALUES TAKEN FROM RAPIDAPI SITE ON HOW TO REQUEST HOTELS API
const baseURL = "hotels4.p.rapidapi.com"
const locale = "en_US"

// Requesting a location from hotels (destination string -> location-id)
const hotelLocationsEndpoint = "https://hotels4.p.rapidapi.com/locations/search"
const getHotelLocationOptions = (destination) => {
  return (
    getGenericRapidAPIOptions(baseURL, hotelLocationsEndpoint, {
      query: destination,
      locale: locale,
    })
  )
}

// Using the location-id from the above request, we can request some hotels in the area
const hotelListEndpoint = "https://hotels4.p.rapidapi.com/properties/list"
const getHotelListOptions = (destinationId, startDate, endDate, numPeople, priceLevel) => {
  return (
    getGenericRapidAPIOptions(baseURL, hotelListEndpoint, {
      destinationId: destinationID,
      pageNumber: "1",
      pageSize: "25",
      checkIn: startDate,
      checkOut: endDate,
      adults1: numPeople,
      // need to find some way to order this
      // sortOrder: sortOrder
      locale: locale,
    })
  )
}

// Using each hotelId we retreive from the previous call, we can get the hotel details and photo options
// Combining this into a single options object coz it makes more sense
const hotelDetailsEndpoint = "https://hotels4.p.rapidapi.com/properties/get-details"
const hotelPhotoEndpoint = "https://hotels4.p.rapidapi.com/properties/get-hotel-photos"
const getHotelDetailsOptions = (hotelIds, startDate, endDate, numPeople, currency) => {
  return (
    hotelIds.map((hotelId, index) => ({
      details: getGenericRapidAPIOptions(baseURL, hotelDetailsEndpoint, {
        id: hotelId,
        checkIn: startDate,
        checkOut: endDate,
        adults1: numPeople,
        currency: currency,
        locale: locale,
      }),
      photo: getGenericRapidAPIOptions(baseURL, hotelPhotoEndpoint, {
        id: hotelId
      }),
    }))
  )
}
