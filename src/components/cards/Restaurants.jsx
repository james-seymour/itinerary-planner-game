import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import HotelImageCarousel from "./HotelImageCarousel"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: "45vh"
  },
  card: {
    border: "none",
    maxWidth: "40vw",
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

const Restaurants = ({ data }) => {
  const { restaurants } = data
  const classes = useStyles()

  const photoURL = "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg"
  console.log(restaurants)
  return (
    <Paper className={classes.wrapper}>
      <Carousel showThumbs={false}>
        {restaurants.map((restaurant) => {
          const { name, address, cuisine, price_level, rating, tripAdvisorLink, photo } = restaurant
          return (
            <Paper square className={classes.card}>
              <CardMedia className={classes.photo} image={photo} />
              <CardHeader
                title={name}
                subheader={address}
              />
            </Paper>        
          )
        })}
      </Carousel>
    </Paper>

  )
}

export default Restaurants
