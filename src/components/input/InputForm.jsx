import { Button, Collapse, MenuItem, Typography } from "@material-ui/core"
import { Field, Form, Formik } from "formik"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns/"
import { KeyboardDatePicker } from "formik-material-ui-pickers"
import { TextField } from "formik-material-ui"
import components from "./input_components/components"

const InputForm = (props) => {
  const { Destination, StartDate, EndDate, Budget, People, Currency } = components

  return (
    
    <Formik
      initialValues= {{
        destination: "",
        startDate: new Date(),
        endDate: new Date(),
        budgetLevel: "medium",
        numberOfPeople: "1",
        currency: "AUD"
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
                <Destination />
                <StartDate />
                <EndDate />
                <Budget />
                <People />
                <Currency />
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