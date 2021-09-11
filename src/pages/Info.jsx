import { useEffect } from "react"
import components from '../components/cards/components'
import filterAPIData from '../tools/filterAPIData'
import ScriptTag from "react-script-tag"
import { Box, makeStyles } from '@material-ui/core'




const Info = ({ visibility, APIData }) => {
  console.log("Rerendering")
  
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
      <Attractions posx={100} posy={200} visible={visibility.attractions} data={data}/>
      <Flights posx={100} posy={100} visible={visibility.flights} data={data} />
      <Hotels posx={100} posy={100} visible={visibility.hotels} data={data}/>
      <Restaurants posx={100} posy={100} visible={visibility.restaurants} data={data}/>
      <Weather posx={100} posy={100} visible={visibility.weather} data={data} />
      {/* <Map data={data}/> */}
    </div>
  )
}

export default Info
