import { Field } from "formik"
import { KeyboardDatePicker } from "formik-material-ui-pickers"

const StartDate = () => {
  return (
    <Field
      component={KeyboardDatePicker}
      name="startDate"
      type="startDate"
      label="Starting Date!"
    />
  )
}

export default StartDate
