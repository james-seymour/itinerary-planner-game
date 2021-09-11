import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import HotelImageCarousel from "./HotelImageCarousel"

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "25vw",
  },
  photo: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
  },
  rating: {
    padding: 10,
  }
}))

const parseHotel = (hotel) => {
  try {    
    const hotelDetails = hotel.details.data.body    
    const photosLocation = hotel.photo.hotelImages
    return ({
      hotelName: hotelDetails.propertyDescription.name,
      checkIn:`${hotelDetails.atAGlance.keyFacts.arrivingLeaving[0]}, ${hotelDetails.atAGlance.keyFacts.arrivingLeaving[1]}\n`,
      rating: hotelDetails.guestReviews.brands.rating/2,
      totalReviews: hotelDetails.guestReviews.brands.total,
      healthAndSafety: hotelDetails.hygieneAndCleanliness.healthAndSafetyMeasures.description ? `\n${hotelDetails.hygieneAndCleanliness.healthAndSafetyMeasures.description}` : "Unfortunately there were no health and safety measures found for this hotel",
      price: hotelDetails.propertyDescription.featuredPrice.currentPrice.formatted,
      address: `${hotelDetails.propertyDescription.address.addressLine1}, ${hotelDetails.propertyDescription.address.addressLine2}`,
      photos: photosLocation.map((photo) => {
        const baseURL = photo.baseUrl.replace(/{size}/, "z")
        return (`${baseURL}?impolicy=fcrop&w=1000&h=500&q=medium`)
      }).slice(0, 10),
    })
  } catch(err) {
    return undefined
  }  
}

const Hotel = ({ data }) => {
  const classes = useStyles()

  const { hotels } = data
  const values = parseHotel(hotels[6])
  if (values === undefined) {
    return (<div> </div>)
  }

  const { hotelName, checkIn, rating, totalReviews, healthAndSafety, address, price, photos } = values
  // Change 0 in hotel below for a for loop

  return (
    <Card className={classes.card}>
      <CardMedia>
        <HotelImageCarousel photos={photos} />
      </CardMedia>
      <CardHeader 
        title={hotelName}
        subheader={address}
        action={
          <Rating 
            className={classes.rating}
            name="read-only" 
            value={rating} 
            readOnly
          />
        }
      /> 
      <Divider variant="middle"/>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="body1" component="h2">
          {`${price}/night`}
        </Typography>
        <Typography variant="body2">
          {checkIn}
        </Typography>
        <Typography variant="body2">
          {healthAndSafety}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Hotel
