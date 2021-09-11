import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  rectangle: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: theme.palette.primary.main
  },

  circle: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '100%'
  }
}))

function Car() {
  const classes = useStyles()
  return <>
      <div className={classes.rectangle}></div>
      <div className={classes.circle}></div>
    </>
}

export default Car