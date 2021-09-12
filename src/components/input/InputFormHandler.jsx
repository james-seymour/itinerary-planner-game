import { useState } from "react"
import { Redirect } from "react-router-dom"
import InputForm from "./InputForm"
import { createBrowserHistory } from "history"
import filterInputData from "../../tools/filterInputData"
import getAPIData from "../../api/getAPIData"
import tokyoResponse from "../../api/sample_responses/tokyoResponse"
import { Button, makeStyles } from "@material-ui/core"

const InputFormHandler = ({ APIData }) => {
  
  const useStyles = makeStyles((theme) => ({
    background: {
      backgroundColor: theme.palette.secondary.main,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      left: 0,
    }
  }))
  const classes = useStyles()


  const [travelAdvisorRedirect, setTravelAdvisorRedirect] = useState(false)
  const [hotelsRedirect, setHotelsRedirect] = useState(false)
  const [weatherRedirect, setWeatherRedirect] = useState(false)
  const redirects = { 
    travel: setTravelAdvisorRedirect, 
    hotels: setHotelsRedirect, 
    weather: setWeatherRedirect,
  }

  const handleFormSubmitted = (values, example) => {


    if (example) {
      Object.assign(APIData, tokyoResponse)
      APIData.current.destination = "Tokyo"
      APIData.current.startDateString = "2022-01-01"
      APIData.current.endDateString = "2022-01-15"
      setTravelAdvisorRedirect(true)
      setHotelsRedirect(true)
      setWeatherRedirect(true)
    } else {
      const parsedValuesIn = filterInputData(values)
      Object.assign(APIData.current, parsedValuesIn)
      // getAPIData(parsedValuesIn, APIData.current, redirects)
    }

  }

  const allAPISLoaded = travelAdvisorRedirect && hotelsRedirect && weatherRedirect
  if (allAPISLoaded) {
    createBrowserHistory().push("/")
    return <Redirect to="/game" />
  }
  return (
    <>
      <div id="fullscreen" className={classes.background}></div>
      <InputForm submitForm={handleFormSubmitted}/>
    </> 
  )
}

export default InputFormHandler