import React from 'react'
import { Card, CardHeader, Collapse, makeStyles } from '@material-ui/core'



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
  const googleMapLink = `https://www.google.com/maps/embed/v1/place?q=${destination}&key=${process.env.REACT_APP_GOOGLEAPI_KEY}`;
  return (
    <Collapse className={classes.collapse} in={visible}>
      <Card variant="outlined" >
        <CardHeader
          title={`Explore ${destination} and book a flight!`}
          subheader={`Use the interactive map below to explore ${destination}`}
        />
        {/* <iframe src={skyscannerWidgetSource} className={classes.skyScannerWidget}></iframe> */}
        
        <iframe
          // className={classes.googleMap}
          loading="lazy"
          allowfullscreen
          src={googleMapLink}
          frameBorder="none"
          width="800"
          height="600"
        ></iframe>
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
