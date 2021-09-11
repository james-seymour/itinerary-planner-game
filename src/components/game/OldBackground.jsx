import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core'
import background from './img/backgroundtest.jpg'
import { auto } from "async"

const Background = (props) => {

  const [pos, setPos] = useState(0)
  const [vel, setVel] = useState(0)
  const [acc, setAcc] = useState(0)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTick(prevState => prevState + 1)
    }, 50)
  }, [tick])

  const keyPressed = (event) => {
    console.log("pressed")
    console.log(event)

    if (event.key === "a" || event.key === "ArrowLeft") { 
      move(1)
    }
    if (event.key === "d" || event.key === "ArrowRight") { 
      move(-1)
    }
  }

  useEffect(() => {
    document.getElementById("background").focus()
  }, [])
  
  const slowDown = (event) => {
    if (vel !== 0) {
      if (vel > 0) {
        setVel(prevVel => prevVel - 1);
      } else {
        setVel(prevVel => prevVel + 1);
      }
    }
  }

  const useStyles = makeStyles((theme) => ({
    background: {
      position: "absolute",
      height: 500,
      width: auto,
      top: 130,
      left: pos,
    }
  }))

  const move = (value) => {
    const newPos = pos + vel + value
    setPos(prevPos => prevPos + vel + value)

    //Edit velocity
    if (value == -1 && vel > -5) {
      setVel(prevVel => prevVel + value)
    }
    if (value == 1 && vel < 5) {
      setVel(prevVel => prevVel + value)
    }
  }

  const classes = useStyles()

  return (
    <img
      id="background"
      src={background} 
      className={classes.background} 
      onKeyDown={keyPressed} 
      onKeyUp={slowDown}
      tabIndex="0"
    />
  )
}

export default Background