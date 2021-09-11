import { useRef, useState } from "react"


const useCar = () => {

  const canvasRef = useRef(initialValue)
  const [context, setContext] = useState(null)

  let initialCar = {
    styles: "",
    x: 100,
    y: 400,
    velocity: 0,
    power: 0,
    isThrottling: false,
    isReversing: false,
  }

  const [car, setCar] = useState(initialCar)
  
}