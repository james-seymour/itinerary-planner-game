import React from 'react'
import { Box, Card, CardHeader, Collapse, makeStyles } from '@material-ui/core'



const Flights = ({ posx, posy, visible, data }) => {
  const useStyles = makeStyles((theme) => ({
    collapse: {
      position: "absolute",
      top: posx,
      left: posy,
    },
  }))

  const classes = useStyles()

  const { destination, startDateString, endDateString } = data
  return (
    <Collapse className={classes.collapse} in={visible}>
      <Card variant="outlined" >
        <CardHeader
          title={`Flights to ${destination}`}
          subheader="Book a flight!"
        />
        {/* <iframe src={skyscannerWidgetSource} className={classes.skyScannerWidget}></iframe> */}
        <div
          data-skyscanner-widget="SearchWidget"
          data-locale="en-US"
          data-market="AU"
          data-currency="AUD"
          data-origin-name="'Brisbane'"
          data-destination-name={`'${destination}'`}
          data-flight-outbound-date={`${startDateString}`}
          data-flight-inbound-date={`${endDateString}`}
          data-widget-border-radius="10"
          data-powered-by-size="0"
          data-widget-padding="1rem"
        ></div>
      </Card>
    </Collapse>
  )
}

export default Flights
