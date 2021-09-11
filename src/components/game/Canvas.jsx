import { makeStyles } from "@material-ui/core"

const Canvas = (props) => {
  const { draw, canvasRef, classes, ...rest } = props
  
  return (
    <>
      <canvas className={classes.canvas} ref={canvasRef} {...rest}></canvas>
    </>
  )
}

export default Canvas
