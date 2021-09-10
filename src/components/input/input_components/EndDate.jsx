import { Field } from "formik"
import { KeyboardDatePicker } from "formik-material-ui-pickers"

const EndDate = () => {
  return (
    <Field
      component={KeyboardDatePicker}
      name="endDate"
      type="endDate"
      label="Ending Date!"
    />
  )
}

export default EndDate
