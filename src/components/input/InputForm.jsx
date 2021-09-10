import { Collapse, Typography } from "@material-ui/core"
import "@fontsource/roboto"
import { Field, Formik } from "formik"

import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns/"
import { KeyboardDatePicker } from "formik-material-ui-pickers"


const InputForm = (props) => {

  return (

    <Formik
      initialValues= {{
        destination: "",
        startDate: new Date(),
        endDate: new Date(),
        priceLevel: "medium",
        numberOfPeople: "1"
      }}
    
      validate={(values) => {
        const errors = {}
        return errors
      }}

      onSubmit={(values, {setSubmitting}) => {
        setSubmitting = false
        // GET API DATA HERE
      }}
    >
      {({submitForm, isSubmitting, touched, errors}) => (
        <>
          <Collapse>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Field
                component={KeyboardDatePicker}
                name="startDate"
                type="startDate"
                label="Starting Date!"
              />
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