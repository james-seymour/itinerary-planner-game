import axios from "axios"
import { getRestaurantOptions, getAttractionOptions } from "./params/travel"

const getRestaurantAttractionData = (values, APIData, setRedirect) => {
    const { latitude, longitude } = APIData
    const { currency } = values

    const restaurantOptions = getRestaurantOptions(latitude, longitude, currency)
    const attractionOptions = getAttractionOptions(latitude, longitude, currency)

    axios.request(restaurantOptions).then((restaurantResponse) => {
    axios.request(attractionOptions).then((attractionResponse) => {
      Object.assign(APIData, {
        restaurants: restaurantResponse.data.data,
        attractions: attractionResponse.data.data,
      })

      setRedirect(true)

    }).catch((error) => { setRedirect(true) })
    }).catch((error) => { setRedirect(true) })

}

export default getRestaurantAttractionData