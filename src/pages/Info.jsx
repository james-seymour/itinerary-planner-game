import React from 'react'
import components from '../components/cards/components'
import filterAPIData from '../tools/filterAPIData'
import ScriptTag from "react-script-tag"

const Info = ({ APIData }) => {
  const data = filterAPIData(APIData.current)
  console.log(data)

  const { Attractions, Flights, Hotel, Restaurants, Weather, Map } = components
  return (
    <div>
      <ScriptTag type="text/javascript" src="https://widgets.skyscanner.net/widget-server/js/loader.js" />
      {/* <Attractions data={data}/> */}
      {/* <Flights data={data} /> */}
      {/* <Hotel data={data}/> */}
      <Restaurants data={data}/>
      {/* <Weather data={data} /> */}
      {/* <Map data={data}/> */}
    </div>
  )
}

export default Info
