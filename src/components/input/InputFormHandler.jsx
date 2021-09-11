import { useState } from "react"
import { Redirect } from "react-router-dom"
import InputForm from "./InputForm"
import { createBrowserHistory } from "history"
import filterInputData from "../../tools/filterInputData"
import filterAPIData from "../../tools/filterAPIData"
import getAPIData from "../../api/getAPIData"
import tokyoResponse from "../../api/sample_responses/tokyoResponse"

const InputFormHandler = ({ APIData }) => {

  const [travelAdvisorRedirect, setTravelAdvisorRedirect] = useState(false)
  const [hotelsRedirect, setHotelsRedirect] = useState(false)
  const [weatherRedirect, setWeatherRedirect] = useState(false)
  const redirects = { 
    travel: setTravelAdvisorRedirect, 
    hotels: setHotelsRedirect, 
    weather: setWeatherRedirect,
  }

  const handleFormSubmitted = (values) => {


    const parsedValuesIn = filterInputData(values)
    // getAPIData(parsedValuesIn, APIData.current, redirects)
    // Have this for testing so we dont have to call an API each time we wanna get data
    // THis is the response we get from the API saved to file
    Object.assign(APIData, tokyoResponse)

    // Parent callback function to handle values before redirecting
    setTravelAdvisorRedirect(true)
    setHotelsRedirect(true)
    setWeatherRedirect(true)
  }

  const allAPISLoaded = travelAdvisorRedirect && hotelsRedirect && weatherRedirect
  if (allAPISLoaded) {
    filterAPIData(APIData.current)
    createBrowserHistory().push("/")
    return <Redirect to="/game" />
  }
  return (
    <InputForm submitForm={handleFormSubmitted}/> 
  )
}

export default InputFormHandler