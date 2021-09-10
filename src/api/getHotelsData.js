import axios from "axios"
import { getHotelLocationOptions, getHotelListOptions, getHotelDetailsOptions } from "./params/hotels"


const getHotelsData = (values, APIData, setRedirect) => {

  let hotelOneLoaded = false
  let hotelTwoLoaded = false
  let hotelThreeLoaded = false
  let hotelFourLoaded = false
  let hotelsLoaded = [ hotelOneLoaded, hotelTwoLoaded, hotelThreeLoaded, hotelFourLoaded ]
  // let hotelsLoaded = hotelOneLoaded && hotelTwoLoaded && hotelThreeLoaded && hotelFourLoaded
  console.log("Starting")
  const hotelLocationOptions = getHotelLocationOptions(values.destination)
  axios.request(hotelLocationOptions).then((locationResponse) => {
    // console.log("First location response")
    // console.log(locationResponse)
    let hotelsLocationID;
    for (let group of locationResponse.data.suggestions) {
      if (group.group === "CITY_GROUP") {
        hotelsLocationID = group.entities[0].destinationId
      }
    }
    if (!hotelsLocationID) { return setRedirect(true)}
    // TODO: add a number of people on the trip input in the form
    const numPeople = "4"
    const hotelListOptions = getHotelListOptions(hotelsLocationID, values.forecastStartDate, values.forecastEndDate, numPeople, values.priceLevel)
    axios.request(hotelListOptions).then((hotelListResponse) => {
      console.log("Printing hotel response")
      console.log(hotelListResponse)

      // Possibly need to fix this
      const hotelList = hotelListResponse.data.data.body.searchResults.results
      // WE NEED TO SORT HOTELS IN THE hotelList BY starRating HERE!!
      const hotelIDs = [ hotelList[0].id, hotelList[1].id, hotelList[2].id, hotelList[3].id ]
      console.log("Printing hotel IDS")
      console.log(hotelIDs)
      // console.log("Redirecting")
      // setHotelsRedirect(true)
      const hotelOptions = getHotelDetailsOptions(hotelIDs, values.forecastStartDate, values.forecastEndDate, numPeople)
      // Need to grab more data on these hotels now that we have their IDS
      // EVERYTHING UP TO HERE HAS BEEN TESTED
      for (let hotelOption of hotelOptions) {
        axios.request(hotelOption.details).then((hotelDetailsResponse) => {
          console.log("Hotel details response")
          console.log(hotelDetailsResponse)
          axios.request(hotelOption.photo).then((hotelPhotoResponse) => {
            console.log("Photo Response")
            console.log(hotelPhotoResponse)
            // Update API Values and bool flags here
            const hotel = {
              details: hotelDetailsResponse,
              photo: hotelPhotoResponse,
              // Add data here
            }
            // addHotelToList(APIData, hotel)
            hotelsLoaded[hotelOption.index] = true
            console.log(hotelsLoaded)
            // THIS ALSO NOT WORKING!
            if (hotelsLoaded) {setRedirect(true)}
          }).catch((error) => {setRedirect(true)})
        }).catch((error) => {setRedirect(true)})        
      }
    }).catch((error) => {setRedirect(true)})
  }).catch((error) => {setRedirect(true)})


}

export default getHotelsData