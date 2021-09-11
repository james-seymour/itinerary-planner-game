import { Button, Collapse, MenuItem, Typography } from "@material-ui/core"
import { Form, Formik } from "formik"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns/"
import components from "./input_components/components"
import { isInt, isBefore, isEqual } from "../../tools/validation"

const InputForm = (props) => {
  const { Destination, StartDate, EndDate, Budget, People, Currency } = components

  return (
    
    <Formik
      initialValues= {{
        destination: "Tokyo",
        startDate: new Date("2022-01-01"),
        endDate: new Date("2022-01-15"),
        budgetLevel: "medium",
        numberOfPeople: "1",
        currency: "AUD"
      }}
    
      validate={(values) => {
        const errors = {}
        // if (!values.destination) { errors.destination = "Destination Required" }
        // if (!values.startDate || isBefore(values.startDate, new Date())) { errors.startDate = "Enter a valid starting date"}
        // if (!values.endDate || isBefore(values.endDate, new Date())) {errors.endDate = "Enter a valid ending date"}
        // if (isBefore(values.endDate, values.startDate) || isEqual(values.endDate, values.startDate)) {errors.endDate = "Enter a valid range of dates"}
        // if (values.numberOfPeople < 1 || values.numberOfPeople > 4 || isInt(values.numberOfPeople)) {errors.numberOfPeople = "Enter a valid number of people (1-4)"}
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