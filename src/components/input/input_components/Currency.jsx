import { Field } from "formik"
import { TextField } from "formik-material-ui"
import { MenuItem } from "@material-ui/core"

const currencyOptions = [
  { value: "AUD", label: "$AUD"},
  { value: "USD", label: "$USD" }
]

const Currency = () => {
  return (
    <Field
      component={TextField}
      name="currency"
      type="currency"
      label="Currency"
      select
      margin="normal"
      InputLabelProps={{ shrink: true }}
    >
      {
        currencyOptions.map((currencyOption) => (
          <MenuItem key={currencyOption.value} value={currencyOption.value}>
            {currencyOption.label}
          </MenuItem>
        )) 
      }
    </Field>
  )
}

export default Currency
