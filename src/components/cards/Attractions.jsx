import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar, Paper, Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const useStyles = makeStyles((theme) => ({
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
  grid: {
    flexWrap: "nowrap"
  }
}))

const Attractions = ({ data }) => {
  const { destination, attractions } = data
  console.log(attractions)


  const classes = useStyles()
  return (
    <Card className={classes.wrapper}>
      <CardHeader title={`Attractions in ${destination}`}/>
      <Carousel showThumbs={false}>
        {attractions.map((attraction) => {
          const { name, address, photo, rankingPosition, rating, tripAdvisorLink, distance, awards } = attraction
          return (
            <Card className={classes.card}>
              <CardMedia className={classes.photo} image={photo} />
              <CardHeader title={name} subheader={address} 
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
              <CardContent>
                <Grid className={classes.grid} justify="center" container direction="row">
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="body1">
                      {`Distance from ${destination}: ${distance}km`}
                    </Typography>
                    <Typography variant="body1">
                      {`Ranking: ${rankingPosition}`}
                    </Typography>
                    <Typography variant="body1">
                      {`Awards: ${awards}`}
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

export default Attractions
