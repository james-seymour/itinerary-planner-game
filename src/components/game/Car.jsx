import { makeStyles } from "@material-ui/core"
import carImage from "./img/car.png"

const Car = () => {

  const useStyles = makeStyles((theme) => ({
    image: {
      position: "absolute",
      top: "70vh",
      left: "10vw",
      width: "15vw",
      height: "20vh"
    }
  }))

  const classes = useStyles()

  return (
    <div>
      <img className={classes.image} src={carImage}></img>
    </div>
  )
}

export default Car
