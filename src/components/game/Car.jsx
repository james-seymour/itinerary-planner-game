import { makeStyles } from '@material-ui/styles'
import React from 'react'



const useStyles = makeStyles((theme) => ({
  // Can use the theme passed in here as well
  rectangle: {
    //CSS properties here
    // width: 100,
    // height: 100,
  }
}))


const Car = (props) => {
  
  const classes = useStyles()
  
  return (
    <div>
        <div className={classes.rectangle}></div>
    </div>
  )
}


export default Car