import { useState } from "react"
import { Redirect } from "react-router-dom"
import InputForm from "./InputForm"
import { createBrowserHistory } from "history"
import filterInputData from "../../tools/filterInputData"

const InputFormHandler = (props) => {
  const [redirect, setRedirect] = useState(false)

  const handleFormSubmitted = (values) => {


    const parsedValues = filterInputData(values)
    // Parent callback function to handle values before redirecting
    // TODO: GET API DATA HERE
    // VALUES UPDATED HERE WORKS
    console.log(parsedValues)
    // console.log(getTravelLocationOptions("tokyo"))
    setRedirect(true)
  }

  if (redirect) {
    createBrowserHistory().push("/")
    return <Redirect to="/game" />
  }
  return (
    <InputForm submitForm={handleFormSubmitted}/> 
  )
}

export default InputFormHandler