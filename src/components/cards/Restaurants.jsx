import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar, Paper, Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import HotelImageCarousel from "./HotelImageCarousel"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: "45vh",
  },
  card: {
    boxShadow: "none",
    maxWidth: "40vw",
  },
  photo: {
    paddingTop: "56.25%"
  },
  rating: {
    padding: 10,
  },
  grid: {
    flexWrap: "nowrap"
  }
}))

const Restaurants = ({ data }) => {
  const { restaurants } = data
  const classes = useStyles()

  const photoURL = "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg"
  console.log(restaurants)
  return (
    <Card className={classes.wrapper}>
      <Carousel showThumbs={false}>
        {restaurants.map((restaurant) => {
          const { name, address, cuisine, price_level, rating, tripAdvisorLink, photo } = restaurant
          return (
            <Card square className={classes.card}>
              <CardMedia className={classes.photo} image={photo} />
              <CardHeader
                title={name}
                subheader={address}
                action={
                  <Rating
                    className={classes.rating}
                    name="read-only"
                    value={parseFloat(rating)}
                    readOnly
                  />
                }
              />
              <Divider variant="middle" />
              <CardContent className={classes.content}>
                <Grid className={classes.grid} container direction="row">
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1">
                      {`Cuisine: ${cuisine.join(", ")}`}
                    </Typography>
                    <Typography variant="body1">
                      {`Price: ${price_level}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      display="inline"
                      variant="contained"
                      href={tripAdvisorLink} 
                      color="primary"
                    >See on Trip Advisor</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>        
          )
        })}
      </Carousel>
    </Card>
  )
}

export default Restaurants
