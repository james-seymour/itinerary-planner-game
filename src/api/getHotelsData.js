import axios from "axios"
import { getHotelLocationOptions, getHotelListOptions, getHotelDetailsOptions } from "./params/hotels"


const getHotelsData = (values, APIData, setRedirect) => {

  const { 
    destination, 
    startDateString, 
    endDateString, 
    forecastStartDate, 
    forecastEndDate, 
    numberOfPeople, 
    budgetLevel,
    currency,
  } = values

  console.log("Starting")
  const hotelLocationOptions = getHotelLocationOptions(destination)
  axios.request(hotelLocationOptions).then((locationResponse) => {
    // console.log("First location response")
    // console.log(locationResponse)
    let hotelsLocationId;
    for (let group of locationResponse.data.suggestions) {
      if (group.group === "CITY_GROUP") {
        hotelsLocationId = group.entities[0].destinationId
      }
    }
    if (!hotelsLocationId) { return setRedirect(true) }
    return hotelsLocationId

  }).then((hotelsLocationId) => {
    const hotelListOptions = getHotelListOptions(hotelsLocationId, forecastStartDate, forecastEndDate, numberOfPeople, budgetLevel)
    axios.request(hotelListOptions).then((hotelListResponse) => {
      return hotelListResponse.data.data.body.searchResults.results
    }).then((hotelList) => {
      const hotelIds = hotelList.map((hotel) => { return hotel.id })
      const hotelOptions = getHotelDetailsOptions(hotelIds, forecastStartDate, forecastEndDate, numberOfPeople, currency)

      APIData.hotels = []
      hotelOptions.forEach((hotelOption, index) => {
        // Need this timeout so API doesnt get spammed with too many calls. Could probably speed up
        setTimeout(() => {
          axios.request(hotelOption.details).then((hotelDetailsResponse) => {
          axios.request(hotelOption.photo).then((hotelPhotoResponse) => {

            APIData.hotels.push({
              details: hotelDetailsResponse.data,
              photo: hotelPhotoResponse.data,
            })
            // Max hotels otherwise it sometimes complains
            if (APIData.hotels.length === 10) {
              setRedirect(true)
            }

          }).catch((error) => { setRedirect(true) })
          }).catch((error) => { setRedirect(true) })
        }, 200 * index)
      })
    }).catch((error) => {setRedirect(true)})
  }).catch((error) => {setRedirect(true)})

}

export default getHotelsData