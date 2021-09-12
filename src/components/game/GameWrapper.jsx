import Car from "./Car"
import Game from "./Game"
import { makeStyles, Box, Slider, Typography, Card, CardHeader } from "@material-ui/core"
import { useRef } from "react"

const GameWrapper = ({ visibility, setVisibility }) => {


  const useStyles = makeStyles((theme) => ({
    canvas: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    scene: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    car: {
      height: "100vh",
      position: "absolute",
      backgroundSize: "contain",
      willChange: "transform",
    },
    image: {
      willChange: "transform",
      height: "97vh",
    },
    sliders: {
      textAlign: "center",
      width: 300,
      height: 400,
      position: "absolute"
    },
    slider: {
      padding: "13px 30px",
    }
  }))

  const accelValueText = (value) => {
    return `${value}m/s^2`
  }

  const speedValueText = (value) => {
    return `${value}m/s`
  }

  const acceleration = useRef(2)

  const handleSliderChange = (event, number) => {
    acceleration.current = number
  }


  const classes = useStyles()

  return (
    <>
      <Game visibility={visibility} setVisibility={setVisibility} classes={classes} />
      <Car />
      <Card className={classes.sliders}>
        <CardHeader title="Options"/>
        <Box className={classes.slider}>
          <Typography>
            Acceleration
          </Typography>
          <Slider
            onChangeCommitted={handleSliderChange}
            defaultValue={2.5}
            getAriaValueText={accelValueText}
            // aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={5}
          />
        </Box>
        <Box className={classes.slider}>
          <Typography>
            Max Speed
          </Typography>
          <Slider
            onChangeCommitted={handleSliderChange}
            defaultValue={2.5}
            getAriaValueText={accelValueText}
            // aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={5}
          />
        </Box>
        <Box className={classes.slider}>
          <Typography>
            Reverse Acceleration
          </Typography>
          <Slider
            onChangeCommitted={handleSliderChange}
            defaultValue={2.5}
            getAriaValueText={accelValueText}
            // aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={5}
          />
        </Box>
        <Box className={classes.slider}>
          <Typography>
            Max Reverse Speed
          </Typography>
          <Slider
            onChangeCommitted={handleSliderChange}
            defaultValue={2.5}
            getAriaValueText={accelValueText}
            // aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={5}
          />
        </Box>
      </Card>

    </>
  )
}

export default GameWrapper
