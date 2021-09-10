import { Field } from "formik"
import { TextField } from "formik-material-ui"
import { MenuItem } from "@material-ui/core"

const budgetRange = [ 
  { value: "low", label: "Low Budget" },
  { value: "medium", label: "Mid-range Budget" },
  { value: "high", label: "High Budget" },
]

const Budget = () => {
  return (
    <Field
      component={TextField}
      name="budgetLevel"
      type="budgetLevel"
      label="Choose a budget!"
      select
      margin="normal"                      
      InputLabelProps={{ shrink: true }}
    >
      {
        budgetRange.map((budgetOption) => (
          <MenuItem key={budgetOption.value} value={budgetOption.value}>
            {budgetOption.label}
          </MenuItem>
        )) 
      }
    </Field>
  )
}

export default Budget
