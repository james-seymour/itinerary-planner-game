import { makeStyles } from "@material-ui/core"

const Canvas = (props) => {
  const { draw, canvasRef, ...rest } = props
  
  const useStyles = makeStyles((theme) => ({
    canvas: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  }))

  const classes = useStyles()

  return (
    <>
      <canvas className={classes.canvas} ref={canvasRef} {...rest}></canvas>
    </>
  )
}

export default Canvas
