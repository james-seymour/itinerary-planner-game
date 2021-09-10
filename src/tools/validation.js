import { isBefore, isEqual } from "date-fns"


// This magic function tells if any input in an integer or not
const isInt = (number) => {
  let x = parseFloat(number)
  return isNaN(number) || (x | 0) !== x
}


export { isInt, isBefore, isEqual }