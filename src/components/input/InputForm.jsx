import { Button, CircularProgress, Collapse, Box, CardHeader, Card, makeStyles } from "@material-ui/core"
import { Form, Formik } from "formik"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns/"
import components from "./input_components/components"
import { isInt, isBefore, isEqual } from "../../tools/validation"

const InputForm = (props) => {
  const { Destination, StartDate, EndDate, Budget, People, Currency } = components

  const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: "20vw",
      margin: "auto"
    },
    forminput: {
      textAlign: "center",
    }

  }))

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.forminput} title="Itinerary Planner Game" subheader="Fill out the form below with your travel details!" />
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
                  <Box className={classes.forminput} margin={4}>
                    <Destination />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                    <StartDate />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                    <EndDate />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                    <Budget />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                    <People />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                    <Currency />
                  </Box>
                  <Box className={classes.forminput} margin={4}>
                  <Button
                    variant="contained"
                    disable={isSubmitting}
                    onClick={submitForm}
                    color="primary"
                  > Submit! </Button>
                  </Box>
                </Form>
              </MuiPickersUtilsProvider>
            </Collapse>
            {/* LOADING ANIMATION BELOW */}
            <Box className={classes.forminput} margin={4}>
            <Collapse in={isSubmitting} >
              <CircularProgress />
            </Collapse>
            </Box>
          </>
        )}
      </Formik>
    </Card>
  )
}


export default InputForm