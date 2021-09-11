import useCar from "./useCar"
import { useWindowDimensions } from "./useWindowSize"
import Canvas from "./Canvas"
import backgroundImage from "./img/backgroundtest.jpg"

const Game = ({ classes }) => {
  const { car, canvasRef } = useCar()
  const { windowHeight, windowWidth } = useWindowDimensions()
  
  const Scene = ({ car, dimensions }) => {

    // const moreClasses = useMoreStyles()

    return (
      <>
        <div className={classes.scene}>
          <div className={classes.car}>
            <img className={classes.image} style={{ transform: car.styles }} src={backgroundImage}></img>
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
        classes={classes}
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

export default Game
