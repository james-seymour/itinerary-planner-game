import { Button, Collapse, MenuItem, Typography } from "@material-ui/core"
import { Field, Form, Formik } from "formik"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns/"
import { KeyboardDatePicker } from "formik-material-ui-pickers"
import { TextField } from "formik-material-ui"

const budgetRange = [ 
  { value: "low", label: "Low Budget" },
  { value: "medium", label: "Mid-range Budget" },
  { value: "high", label: "High Budget" },
]

const InputForm = (props) => {

  return (
    
    <Formik
      initialValues= {{
        destination: "",
        startDate: new Date(),
        endDate: new Date(),
        budgetLevel: "medium",
        numberOfPeople: "1"
      }}
    
      validate={(values) => {
        const errors = {}
        // ADD SOME FORM VALIDATION HERE
        return errors
      }}

      onSubmit={(values, {setSubmitting}) => {
        setSubmitting = false
        props.submitForm(values)
      }}
    >
      {({submitForm, isSubmitting, touched, errors}) => (
        <>
          <Collapse in={!isSubmitting}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form>
                <Field
                  component={TextField}
                  name="destination"
                  type="destination"
                  label="Destination!"
                />
                <Field
                  component={KeyboardDatePicker}
                  name="startDate"
                  type="startDate"
                  label="Starting Date!"
                />
                <Field
                  component={KeyboardDatePicker}
                  name="endDate"
                  type="endDate"
                  label="Ending Date!"
                />
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
                <Button
                  variant="contained"
                  disable={isSubmitting}
                  onClick={submitForm}
                  color="primary"
                > Submit! </Button>
              </Form>
            </MuiPickersUtilsProvider>
          </Collapse>
          {/* LOADING ANIMATION BELOW */}
          <Collapse>
          
          
          
          </Collapse>
        </>
      )}
    </Formik>
  )

}


export default InputForm