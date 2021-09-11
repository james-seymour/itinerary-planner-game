import Hotel from "./Hotel"
import HotelsWidget from "./HotelsWidget"
import { Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography, Avatar, Paper, Button, Grid } from "@material-ui/core"
import { Carousel } from "react-responsive-carousel"
import { makeStyles } from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "45vw"
  },
  wrapper: {
    padding: "10rem",
    width: "45vw",
  },
  card: {
    boxShadow: "none",
    maxWidth: "40vw",
    margin: "auto",
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

const Hotels = ({ data }) => {

  const { hotels } = data
  const classes = useStyles()

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
      <Carousel showThumbs={false}>
        {
          hotels.map((hotel) => {
            return (
              <Card className={classes.card}>
                <Hotel hotel={hotel} />
              </Card>
            )
          })
        }
      </Carousel>
      </CardContent>
      <CardContent>
        <HotelsWidget data={data} />
      </CardContent>
    </Card>
    </>
  )
}

export default Hotels
