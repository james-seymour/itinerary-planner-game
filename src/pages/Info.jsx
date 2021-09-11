import React from 'react'
import components from '../components/cards/components'
import filterAPIData from '../tools/filterAPIData'
import ScriptTag from "react-script-tag"
import { Box, makeStyles } from '@material-ui/core'




const Info = ({ APIData }) => {
  
  const useStyles = makeStyles((theme) => ({
  position: {
    position: "absolute",
    top: "20vh",
    left: "10vw",
  }
  }))


  const data = filterAPIData(APIData.current)
  console.log(data)
  const classes = useStyles()
  const { Attractions, Flights, Hotels, Restaurants, Weather, Map, HotelsWidget } = components
  return (
    <div>
      <ScriptTag type="text/javascript" src="https://widgets.skyscanner.net/widget-server/js/loader.js" />
      {/* <Attractions posx={200} posy={200} visible={true} data={data}/> */}
      {/* <Flights posx={200} posy={100} visible={true} data={data} /> */}
      {/* <Hotels posx={100} posy={100} visible={true} data={data}/> */}
      {/* <Restaurants posx={100} posy={100} visible={true} data={data}/> */}
      <Weather posx={100} posy={100} visible={true} data={data} />
      {/* <Map data={data}/> */}
    </div>
  )
}

export default Info
