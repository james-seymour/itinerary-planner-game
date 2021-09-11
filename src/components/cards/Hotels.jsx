import Hotel from "./Hotel"
import HotelsWidget from "./HotelsWidget"
import { Box, Card, CardContent, CardHeader, Collapse, Divider, Typography, Avatar, Paper, Button, Grid, Fade } from "@material-ui/core"
import { Carousel } from "react-responsive-carousel"
import { makeStyles } from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"



const Hotels = ({ posx, posy, visible, data }) => {

  const useStyles = makeStyles((theme) => ({
    collapse: {
      position: "absolute",
      top: posx,
      left: posy,
    },
    root: {
      maxWidth: "30vw",
      margin: "auto",
    },
    wrapper: {
      padding: "10rem",
      width: "35vw",
      margin: "auto",
    },
    header: {
      textAlign: "center",
    },
    card: {
      boxShadow: "none",
      maxWidth: "35vw",
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
  const { destination, hotels } = data
  const classes = useStyles()

  return (
  <Collapse className={classes.collapse} in={visible} timeout="auto">
    <Card className={classes.root}>
      <CardHeader className={classes.header} title={`Hotels in ${destination}`}/>
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
      <Divider variant="middle" />
      <Box p={4}>
        <CardHeader 
          title="Couldn't find what you're looking for?"
          subheader="Search for hotels yourself below! (This might take a while to load)"
        />
      </Box>
      <CardContent>
        <HotelsWidget data={data} />
      </CardContent>
    </Card>
  </Collapse>
  )
}

export default Hotels
