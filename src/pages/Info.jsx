import React from 'react'
import components from '../components/cards/components'
import filterAPIData from '../tools/filterAPIData'
import ScriptTag from "react-script-tag"
import { Box, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  position: {
    position: "absolute",
  }
}))

const Info = ({ APIData }) => {
  const data = filterAPIData(APIData.current)
  console.log(data)
  const classes = useStyles()
  const { Attractions, Flights, Hotels, Restaurants, Weather, Map, HotelsWidget } = components
  return (
    <div>
      <ScriptTag type="text/javascript" src="https://widgets.skyscanner.net/widget-server/js/loader.js" />
      {/* <Attractions data={data}/> */}
      {/* <Flights data={data} /> */}
      <Box className={classes.position}>
        <Hotels data={data}/>
      </Box>
      {/* <Restaurants data={data}/> */}
      {/* <Weather data={data} /> */}
      {/* <Map data={data}/> */}
    </div>
  )
}

export default Info
