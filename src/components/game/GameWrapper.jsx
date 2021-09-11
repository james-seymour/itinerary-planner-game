import Car from "./Car"
import Game from "./Game"
import { makeStyles } from "@material-ui/core"

const GameWrapper = () => {
  const useStyles = makeStyles((theme) => ({
    canvas: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    scene: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    car: {
      width: 1000,
      height: "100vh",
      position: "absolute",
      backgroundSize: "contain",
      willChange: "transform",
    },
    image: {
      willChange: "transform",
      height: "97vh",
    }
  }))

  const classes = useStyles()

  return (
    <>
      <Game classes={classes}/>
      <Car />
    </>
  )
}

export default GameWrapper
