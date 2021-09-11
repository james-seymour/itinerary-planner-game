import useCar from "./useCar"
import { useWindowDimensions } from "./useWindowSize"
import Canvas from "./Canvas"
import backgroundImage from "./img/backgroundtest.jpg"


const showCards = (carPosition, visibility, setVisibility, viewWidth) => {

  const attractionsLowerBound = 115
  const attractionsUpperBound = 130
  if (carPosition > attractionsLowerBound && carPosition < attractionsUpperBound && !visibility.attractions) {
    setVisibility.attractions(true)
  } else if (carPosition < attractionsLowerBound || carPosition > attractionsUpperBound && visibility.attractions) {
    setVisibility.attractions(false)
  }

  const airportLowerBound = 145
  const airportUpperBound = 160
  if (carPosition > airportLowerBound && carPosition < airportUpperBound && !visibility.flights) {
    setVisibility.flights(true)
  } else if (carPosition < airportLowerBound || carPosition > airportUpperBound && visibility.flights) {
    setVisibility.flights(false)
  }
  const hotelsLowerBound = 40
  const hotelsUpperBound = 55
  if (carPosition > hotelsLowerBound && carPosition < hotelsUpperBound && !visibility.hotels) {
    setVisibility.hotels(true)
  } else if (carPosition < hotelsLowerBound || carPosition > hotelsUpperBound && visibility.hotels) {
    setVisibility.hotels(false)
  }

  const restaurantsLowerBound = 65
  const restaurantsUpperBound = 80
  if (carPosition > restaurantsLowerBound && carPosition < restaurantsUpperBound && !visibility.restaurants) {
    setVisibility.restaurants(true)
  } else if (carPosition < restaurantsLowerBound || carPosition > restaurantsUpperBound && visibility.restaurants) {
    setVisibility.restaurants(false)
  }
  
  const weatherLowerBound = 90
  const weatherUpperBound = 105
  if (carPosition > weatherLowerBound &&  carPosition < weatherUpperBound && !visibility.weather) {
    setVisibility.weather(true)
  } else if (carPosition < weatherLowerBound || carPosition > weatherUpperBound && visibility.weather) {
    setVisibility.weather(false)
  }

}

const Game = ({ visibility, setVisibility, classes }) => {
  const { car, canvasRef } = useCar()
  const { windowHeight, windowWidth } = useWindowDimensions()

  const viewWidth = window.innerWidth / 100
  showCards(Math.abs(car.x)/viewWidth, visibility, setVisibility, viewWidth)

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
