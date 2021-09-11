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
      move()
    }, 1000)
  }, [tick])
  
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

  const move = () => {
    console.log("moving")
  }

  const classes = useStyles()

  return (
    <>
    <button onClick={move}>Move</button>
    <div className={classes.car}>
      
    </div>
    </>
  )
}

export default Car
 