import { useState } from "react"
import { Redirect } from "react-router-dom"
import InputForm from "./InputForm"
import { createBrowserHistory } from "history"
import filterInputData from "../../tools/filterInputData"
import getAPIData from "../../api/getAPIData"

const InputFormHandler = (props) => {

  const [travelAdvisorRedirect, setTravelAdvisorRedirect] = useState(false)
  const [hotelsRedirect, setHotelsRedirect] = useState(false)
  const [weatherRedirect, setWeatherRedirect] = useState(false)
  const redirects = { 
    travel: setTravelAdvisorRedirect, 
    hotels: setHotelsRedirect, 
    weather: setWeatherRedirect,
  }

  const handleFormSubmitted = (values) => {


    const parsedValues = filterInputData(values)
    getAPIData(parsedValues, props.APIData.current, redirects)
    // Parent callback function to handle values before redirecting
    // TODO: GET API DATA HERE
    // console.log(getTravelLocationOptions("tokyo"))
  }

  const allAPISLoaded = travelAdvisorRedirect && hotelsRedirect && weatherRedirect
  if (allAPISLoaded) {
    createBrowserHistory().push("/")
    return <Redirect to="/game" />
  }
  return (
    <InputForm submitForm={handleFormSubmitted}/> 
  )
}

export default InputFormHandler