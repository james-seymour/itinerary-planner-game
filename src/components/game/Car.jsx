import useCar from "./useCar"
import { useWindowDimensions } from "./useWindowSize"
import Canvas from "./Canvas"
import { makeStyles } from "@material-ui/core"
import backgroundImage from "./img/backgroundtest.jpg"

const Car = () => {
  const { car, canvasRef } = useCar()
  const { windowHeight, windowWidth } = useWindowDimensions()
    
  
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
      width: 1000,
      height: 1000,
      position: "absolute",
      backgroundSize: "contain",
      willChange: "transform",
    },
    image: {
      willChange: "transform"
    }
  }))

  const classes = useStyles()

  const Scene = ({ car, dimensions }) => {


    // const moreClasses = useMoreStyles()

    return (
      <>
        <div className={classes.scene}>
          <div className={classes.car}>
            <img style={{ transform: car.styles }} src={backgroundImage}></img>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <Canvas 
        canvasRef={canvasRef}
        className={classes.canvas}
        width={windowWidth || 500}
        height={windowHeight || 500}
      />
      <Scene
        car={car}
        dimensions={{ height: windowHeight, width: windowWidth }}
      />
    </div>
  )
}

export default Car
