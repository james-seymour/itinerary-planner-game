import { useRef, useState,useEffect } from "react"
import useKeys from "./useKeys"
import { useWindowDimensions } from "./useWindowSize"



// { powerFactor, maxPower, reverseFactor, maxReverse  }
const useCar = () => {

  const canvasRef = useRef(null)
  const { windowWidth, windowHeight } = useWindowDimensions()

  
  const powerFactor = 0.5
  const maxPower = 10
  const reverseFactor = 1.8
  const maxReverse = 20
  const drag = 0.002

  let initialCar = {
    styles: "",
    x: 0,
    y: 0,
    velocity: 0,
    power: 0,
    reverse: 0,
    isThrottling: false,
    isReversing: false,
  }

  const [car, setCar] = useState(initialCar)
  const [needResize, setNeedResize] = useState(true);
  const keysDown = useKeys()
  
  const keyActive = (key) => {
    return keysDown[key]
  }

  const driveCar = (car) => {
    const pressingLeft = keyActive("right")
    const pressingRight = keyActive("left")

    if (car.isThrottling !== pressingRight || car.isReversing !== pressingLeft) {
      car.isThrottling = pressingRight;
      car.isReversing = pressingLeft;
    }

    updateCar(car)
  }

  const updateCar = (car) => {
    
    if (car.isThrottling) {
      car.power += powerFactor 
    } else {
      car.power -= powerFactor 
    }

    if (car.isReversing) {
      car.reverse += reverseFactor * car.isReversing
    } else {
      car.reverse -= reverseFactor / 2
    }

    car.power = Math.max(0, Math.min(maxPower, car.power));
    car.reverse = Math.max(0, Math.min(maxReverse, car.reverse));
    car.velocity = (car.power - car.reverse)
    car.x += car.velocity
    car.velocity *= drag

    setCar({
      ...car,
      styles: `translate(${car.x}px, 0)`
    })
  }

  const update = () => {
    driveCar(car)
  }

  useEffect(() => {
    const canvas = canvasRef.current

    const handleResize = (event) => {
      setNeedResize(true)
    }

    if (needResize) {
      canvas.width = windowWidth
      canvas.height = windowHeight
      setNeedResize(false)
    }

    if (canvasRef.current === undefined) {
      handleResize()
    }

    const interval = setInterval(() => {
      window.addEventListener("resize", handleResize)
      update()
      
    }, 1000 / 60)
    
    return function cleanup() {
      clearInterval(interval)
    }
  }, [car])

  return { car: car, canvasRef }
}

export default useCar