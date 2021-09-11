import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  car: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: theme.palette.primary.main
  }
}))

function Car() {
  const classes = useStyles()
  return <div className={classes.car}></div>
}

export default Car