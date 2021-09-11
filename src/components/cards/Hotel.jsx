import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import HotelImageCarousel from "./HotelImageCarousel"

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "30vw",
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


const Hotel = ({ data }) => {
  const classes = useStyles()

  const { hotels } = data
  // Change 0 in hotel below for a for loop
  const hotelDetails = hotels[0].details.data.body
  const hotelName = hotelDetails.smallPrint.alternativeNames[0]
  const rating = hotelDetails.guestReviews.brands.rating/2
  const totalReviews = hotelDetails.guestReviews.brands.total
  const address = `${hotelDetails.propertyDescription.address.addressLine1}, ${hotelDetails.propertyDescription.address.addressLine2}`
  const price = hotelDetails.propertyDescription.featuredPrice.currentPrice.formatted
  const photosLocation = hotels[0].photo.hotelImages
  const photos = photosLocation.map((photo) => {
    const baseURL = photo.baseUrl.replace(/{size}/, "z")
    return (`${baseURL}?impolicy=fcrop&w=1000&h=666&q=medium`)
  }).slice(0, 8)



  return (
    <>
    <Card className={classes.card}>
      <CardMedia>
        <HotelImageCarousel photos={photos} />
      </CardMedia>
      <CardHeader 
        title={hotelName}
        action={
          <Rating 
            className={classes.rating}
            name="read-only" 
            value={rating} 
            readOnly
          />
        }
      />      

      <CardContent className={classes.content}>

        <Typography variant="h6">
          {address}
        </Typography>
        <Typography variant="caption">
          {`${rating/2} stars with ${totalReviews} total reviews`}
        </Typography>


      </CardContent>





    </Card>
    </>
  )
}

export default Hotel
