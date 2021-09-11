import { makeStyles } from '@material-ui/core'
import { classes } from 'istanbul-lib-coverage'
import React from 'react'
import car from './img/car.jpg'

function Car() {

  const useStyles = makeStyles((theme) => ({
    car: {
      position: "absolute",
      height: 50,
      width: 50,
      left: 500,
      top: 200,
    }
  }))

  const classes = useStyles()

  return <img 
          id="Car"
          className={classes.car}
          src={car} 
          />
}

export default Car
