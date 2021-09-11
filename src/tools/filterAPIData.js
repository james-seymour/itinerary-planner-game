

const filterRestaurants = (restaurants, priceLevel) => {

  let baseFilteredRestaurants = restaurants.filter((restaurant) => {
    // Filter out restaurants without a ranking, price, or with ads.
    return (
      restaurant.ranking_position !== undefined && 
      restaurant.ad_position === undefined && 
      restaurant.price_level !== undefined && 
      restaurant.price_level !== ""
    )
  })

  // Depending on price_level string, we update as an int so we can sort
  baseFilteredRestaurants.map((restaurant) => {
    if (restaurant.price_level === "$") {
      restaurant.price_num = 0
    } else if (restaurant.price_level === "$$") {
      restaurant.price_num = 1
    } else if (restaurant.price_level === "$$ - $$$") {
      restaurant.price_num = 2
    } else if (restaurant.price_level === "$$$") {
      restaurant.price_num = 3
    } else if (restaurant.price_level === "$$$$") {
      restaurant.price_num = 4
    }
  })

  // Filter out any unnecessary information returned by the API that we don't need to display
  let restaurantData = []
  for (let r of baseFilteredRestaurants) {
    restaurantData.push({
      name: r.name,
      // TODO: check photo size and specify here
      photo: r.photo.images.medium.url,
      price_level: r.price_level,
      price_num: r.price_num,
      rating: r.rating,
      rankingPosition: r.ranking_position,
      address: r.address,
      tripAdvisorLink: r.web_url,
      website: r.website,
      cuisine: r.cuisine.map((cuisine) =>  (cuisine.name))
    })
  }

  // Sort the restaurants depending on the user's chosen price level
  if (priceLevel === "low") {
    restaurantData.sort((restaurant1, restaurant2) => restaurant1.price_num - restaurant2.price_num)
  } else if (priceLevel === "medium") {
    restaurantData.sort((restaurant1, restaurant2) => restaurant1.rankingPosition - restaurant2.rankingPosition) 
  } else if (priceLevel === "high") {
    restaurantData.sort((restaurant1, restaurant2) => restaurant2.price_num - restaurant1.price_num) 
  }
  return restaurantData
}


const filterAttractions = (attractions) => {
  // Filter out restaurants without a ranking_position, or an ad
  let filteredAttractions = attractions.filter((attraction) => {
    return (
      attraction.ranking_position !== undefined && 
      attraction.ad_position === undefined
    )
  })

  // Filter out any unnecessary info again 
  let attractionData = []
  for (let a of filteredAttractions) {
    attractionData.push({
      name: a.name,
      photo: a.photo.images.medium.url,
      rating: a.rating,
      rankingPosition: a.ranking_position,
      address: a.address,
      tripAdvisorLink: a.web_url,
      website: a.website,
    })
  }

  // Always sort attractions by ranking position rather 
  attractionData.sort((attraction1, attraction2) => attraction2.rating - attraction1.rating)
  return attractionData
}

const filterWeatherHistory = (weatherHistory) => {
  let filteredWeatherHistory = []
  for (let day of weatherHistory) {
    filteredWeatherHistory.push({
      date: day.date,
      precip: day.prcp,
      snow: day.snow,
      averageTemp: day.tavg,
      maxTemp: day.tmax,
      minTemp: day.tmin,
    })
  }

  return filteredWeatherHistory
}

const conditions = new Map([[1, "Clear"], [2, "Fair"], [3, "Cloudy"], [4, "Overcast"], [5, "Fog"], [6, "Freezing Fog"], 
  [7, "Light Rain"], [8, "Rain"], [9, "Heavy Rain"], [10, "Freezing Rain"], [11, "Heavy Freezing Rain"],
  [12, "Sleet"], [13, "Heavy Sleet"], [14, "Light Snowfall"], [15, "Snowfall"], [16, "Heavy Snowfall"], 
  [17, "Rain Shower"], [18, "Heavy Rain Shower"], [19, "Sleet Shower"], [20, "Heavy Sleet Shower"], 
  [21, "Snow Shower"], [22, "Heavy Snower Shower"], [23, "Lightning"], [24, "Hail"], [25, "Thunderstorm"], 
  [26, "Heavy Thunderstorm"], [27, "Storm"] ])
const filterWeatherCondition = (weatherConditions) => {
  for (let day of weatherConditions) {
    const conditionCode = day.coco

    if (conditionCode !== 0) {
      return { code: conditionCode, condition: conditions.get(conditionCode) }
    }

  }
  return { code: 1, condition: "Clear"}
}

const filterHotels = (hotels) => {
  return hotels.map((hotel) => {
    if (hotel.errorMessage === undefined) {
      return hotel 
    }
  })
}

const filterAPIData = (APIData) => {
  return ({
    ...APIData,
    hotels: filterHotels(APIData.hotels),
    restaurants: filterRestaurants(APIData.restaurants, APIData.priceLevel),
    attractions: filterAttractions(APIData.attractions),
    weather: filterWeatherHistory(APIData.weatherHistory),
    weatherCondition: filterWeatherCondition(APIData.weatherCondition),
  })
}

export default filterAPIData