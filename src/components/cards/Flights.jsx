import React from 'react'
import { Box, Card, CardHeader,  } from '@material-ui/core'

const Flights = ({ data }) => {
  const { destination, startDateString, endDateString } = data
  return (
    <Box width={0.2} margin={4}>
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
    </Box>
  )
}

export default Flights
