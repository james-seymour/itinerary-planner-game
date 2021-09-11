import useCar from "./useCar"
import { useWindowDimensions } from "./useWindowSize"
import Canvas from "./Canvas"
import { makeStyles } from "@material-ui/core"

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
    }
  }))

  const classes = useStyles()

  const Scene = ({ car, dimensions }) => {
    return (
      <>
        <div className={classes.scene}>
          <div style={{ transform: car.styles }}></div>
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
