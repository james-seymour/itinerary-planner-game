import { useState } from "react"
import { Redirect } from "react-router-dom"
import InputForm from "./InputForm"



const InputFormHandler = (props) => {
  const [redirect, setRedirect] = useState(false)

  const handleFormSubmitted = (values) => {
    // Parent callback function to handle values before redirecting
    // TODO: GET API DATA HERE
    // VALUES UPDATED HERE WORKS
    console.log(values)
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/game" />
  }
  return (
    <InputForm submitForm={handleFormSubmitted}/> 
  )
}

export default InputFormHandler