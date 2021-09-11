import axios from "axios"
import { getHotelLocationOptions, getHotelListOptions, getHotelDetailsOptions } from "./params/hotels"



const getHotelsData = (values, APIData, setRedirect) => {

  console.log("Starting")
  const hotelLocationOptions = getHotelLocationOptions(values.destination)
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
    const hotelListOptions = getHotelListOptions(hotelsLocationId, values.forecastStartDate, values.forecastEndDate, values.numberOfPeople, values.priceLevel)
    axios.request(hotelListOptions).then((hotelListResponse) => {
      return hotelListResponse.data.data.body.searchResults.results
    }).then((hotelList) => {
      // THIS WORKING
      const hotelIds = hotelList.map((hotel) => { return hotel.id })
      console.log(hotelIds)

    }).catch((error) => {setRedirect(true)})

  }).catch((error) => {setRedirect(true)})
  
    // // TODO: add a number of people on the trip input in the form
    // const hotelListOptions = getHotelListOptions(hotelsLocationID, values.forecastStartDate, values.forecastEndDate, values.numberOfPeople, values.priceLevel)
    // axios.request(hotelListOptions).then((hotelListResponse) => {
    //   // console.log("Printing hotel response")
    //   // console.log(hotelListResponse)

    //   // Possibly need to fix this
    //   const hotelList = hotelListResponse.data.data.body.searchResults.results
    //   // WE NEED TO SORT HOTELS IN THE hotelList BY starRating HERE!!
    //   let hotelIDs = []
    //   for (let hotel of hotelList) { hotelIDs.push(hotel.id) }
    //   // console.log("Printing hotel IDS")
    //   // console.log(hotelIDs)
    //   // console.log("Redirecting")
    //   // setRedirect(true)
    //   const hotelOptions = getHotelDetailsOptions(hotelIDs, values.startDate, values.endDate, values.numberOfPeople)
    //   // Need to grab more data on these hotels now that we have their IDS
    //   // EVERYTHING UP TO HERE HAS BEEN TESTED
    //   let hotels = []
    //   hotelOptions.forEach((hotelOption, index) => {
    //     setTimeout(() => {
    //       axios.request(hotelOption.details).then((hotelDetailsResponse) => {
    //         // console.log("Hotel details response")
    //         // console.log(hotelDetailsResponse)
    //         // Ik this is an anti-pattern but I cant get continue to work
    //         if (hotelDetailsResponse.data.errorMessage === undefined) {
    //           axios.request(hotelOption.photo).then((hotelPhotoResponse) => {
    //             // console.log("Photo Response")
    //             // console.log(hotelPhotoResponse)
    //             const hotel = {
    //               details: hotelDetailsResponse.data,
    //               photo: hotelPhotoResponse.data,
    //             }
    //             hotels.push(hotel)
    //             if (hotels.length === 4) { 
    //               Object.assign(APIData, { hotels: hotels } )
    //               setRedirect(true)
    //             }
    //           }).catch((error) => {setRedirect(true)})            
    //         }
    //       }).catch((error) => {setRedirect(true)})
    //     }, 200 * index)
    //   })
    // }).catch((error) => {
    //   // console.log("Error getting list")  
    //   setRedirect(true)}
    // )



}

export default getHotelsData