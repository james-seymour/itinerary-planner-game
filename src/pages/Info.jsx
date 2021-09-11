import React from 'react'
import components from '../components/cards/components'
import filterAPIData from '../tools/filterAPIData'


const Info = ({ APIData }) => {
  const data = filterAPIData(APIData.current)

  const { Attractions, Flights, Hotels, Restaurants, Weather } = components
  return (
    <div>
      <Attractions attractions={data.attractions}/>
      <Flights />
      <Hotels hotels={data.hotels}/>
      <Restaurants restaurants={data.restaurants}/>
      <Weather weatherCondition={data.weatherCondition} weatherHistory={data.weather}/>
    </div>
  )
}

export default Info
