import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Collapse, Paper, Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Restaurants = ({ posx, posy, visible, data }) => {
  const useStyles = makeStyles((theme) => ({
    collapse: {
      position: "absolute",
      top: posx,
      left: posy,
    },
    wrapper: {
      width: "45vh",
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
    content: {
      textAlign: "left",
    },
    grid: {
      flexWrap: "nowrap"
    }
  }))
  const { destination, restaurants } = data
  const classes = useStyles()

  console.log(restaurants)
  return (
    <Collapse className={classes.collapse} in={visible}>
    <Card className={classes.wrapper}>
      <CardHeader title={`Restaurants in ${destination}`}/>
      <Carousel showThumbs={false}>
        {restaurants.map((restaurant) => {
          const { name, address, cuisine, price_level, rating, tripAdvisorLink, photo, distance } = restaurant
          return (
            <Card className={classes.card}>
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
                <Grid className={classes.grid} justify="center" container direction="row">
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      {`Cuisine: ${cuisine.join(", ")}`}
                    </Typography>
                    <Typography variant="body1">
                      {`Price: ${price_level}`}
                    </Typography>
                    <Typography variant="body1">
                      {`Distance from ${destination}: ${distance}km`}
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
    </Collapse>
  )
}

export default Restaurants
