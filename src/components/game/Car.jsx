import { makeStyles } from "@material-ui/core"
import carImage from "./img/car.jpg"

const Car = () => {

  const useStyles = makeStyles((theme) => ({
    image: {
      position: "absolute",
      top: 100,
      left: 100,
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
