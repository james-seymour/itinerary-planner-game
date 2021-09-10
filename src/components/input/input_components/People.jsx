import { Field } from "formik"
import { TextField } from "formik-material-ui"


const People = () => {
  return (
    <Field
      component={TextField}
      name="numberOfPeople"
      type="numberOfPeople"
      label="Number of People!"
    />
  )
}

export default People
