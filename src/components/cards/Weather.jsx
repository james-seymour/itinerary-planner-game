import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Text } from "recharts"
import { Card, CardHeader, CardContent, Collapse, makeStyles } from "@material-ui/core"


const XAxisLabel = ({ kapi, metric, viewBox}) => {
  return (
    <Text
      x={0}
      y={0}
      dx={310}
      dy={300}
      width={180}
    >Date</Text>
  )
}

const YAxisLabel = ({ kapi, metric, viewBox}) => {
  return (
    <Text
      x={0}
      y={0}
      dx={-200}
      dy={25}
      width={180}
      transform="rotate(-90)"
    >Temperature (°C)</Text>
  )
}

const Weather = ({ posx, posy, visible, data }) => {
  const { destination, weatherCondition, weatherHistory } = data

  const useStyles = makeStyles((theme) => ({
    collapse: {
      position: "absolute",
      top: posx,
      left: posy,
    },
    header: {
      textAlign: "center",
    }
  }))

  const classes = useStyles()

  return (
    <Collapse className={classes.collapse} in={visible}>
      <Card>
        <CardHeader className={classes.header} title={`Weather in ${destination}`} />
        <CardContent p={5}>
          <LineChart width={600} height={300} data={weatherHistory}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="minTemp" stroke="blue"/>
            <Line type="monotone" dataKey="averageTemp" stroke="orange"/>
            <Line type="monotone" dataKey="maxTemp" stroke="red"/>
            <XAxis dataKey="date" label={<XAxisLabel />}/>
            <YAxis label={<YAxisLabel />} domain={[-5, 35]} tickCount={9}/>
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>
    </Collapse>

  )
}

export default Weather
