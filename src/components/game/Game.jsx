import useCar from "./useCar"
import { useWindowDimensions } from "./useWindowSize"
import Canvas from "./Canvas"
import backgroundImage from "./img/backgroundtest.jpg"


const showCards = (carPosition, visibility, setVisibility, viewWidth) => {

  // if (carPosition < 1000 && !visibility.attractions) {
  //   setVisibility.attractions(true)
  // } else if (carPosition > 1000 && visibility.attractions) {
  //   setVisibility.attractions(false)
  // }

  // if (carPosition < 1000 && !visibility.flights) {
  //   setVisibility.flights(true)
  // } else if (carPosition > 1000 && visibility.flights) {
  //   setVisibility.flights(false)
  // }
  console.log(carPosition)
  const hotelsLowerBound = 39 * viewWidth
  const hotelsUpperBound = 55 * viewWidth
  if (carPosition > hotelsLowerBound && carPosition < hotelsUpperBound && !visibility.hotels) {
    setVisibility.hotels(true)
  } else if (carPosition < hotelsLowerBound || carPosition > hotelsUpperBound && visibility.hotels) {
    setVisibility.hotels(false)
  }

  if (carPosition > 1600 && carPosition < 2100 && !visibility.restaurants) {
    setVisibility.restaurants(true)
  } else if (carPosition < 1600 || carPosition > 2100 && visibility.restaurants) {
    setVisibility.restaurants(false)
  }
 
  // if (carPosition < 1000 && !visibility.weather) {
  //   setVisibility.weather(true)
  // } else if (carPosition > 1000 && visibility.weather) {
  //   setVisibility.weather(false)
  // }

}

const Game = ({ visibility, setVisibility, classes }) => {
  const { car, canvasRef } = useCar()
  const { windowHeight, windowWidth } = useWindowDimensions()

  const viewWidth = window.innerWidth / 100
  showCards(Math.abs(car.x), visibility, setVisibility, viewWidth)

  const Scene = ({ car, dimensions }) => {

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
