import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core'




const Car = (props) => {

  const [pos, setPos] = useState(100)
  const [vel, setVel] = useState(0)
  const [acc, setAcc] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTick(prevState => prevState + 1)
    }, 1000)
  }, [tick])

  const keyPressed = (event) => {
    console.log("pressed")
    console.log(event)

    if (event.key === "a" || event.key === "ArrowLeft") { 
      move(-10)
    }
    if (event.key === "d" || event.key === "ArrowRight") { 
      move(10)
    }
  }
  
  const useStyles = makeStyles((theme) => ({
    car: {
      width: 300,
      height: 300,
      backgroundColor: "red",
      position: "absolute",
      top: 500,
      left: pos,
    }
  }))


  const move = (value) => {
    setPos(prevPos => prevPos + value)
  }

  const classes = useStyles()

  return (
    <>
    <div className={classes.car} onKeyDown={keyPressed} tabIndex="0">
      Hello 
    </div>
    </>
  )
}

export default Car
 