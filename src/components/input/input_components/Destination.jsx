import { Field } from "formik"
import { TextField } from "formik-material-ui"

const Destination = () => {
  return (
    <Field
      component={TextField}
      name="destination"
      type="destination"
      label="Destination!"
    />
  )
}

export default Destination
