import './App.css';
import { useRef } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import Game from "./components/game/Game"
import InputFormHandler from './components/input/InputFormHandler';


const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: blue[500]
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      "Roboto",
    ]
  }
})

function App() {

  // Need a reference to APIData in the top level state so that the Game component has access
  // We can pass through this ref to the input form for when the API data is collected and update there
  // Then, on redirect, the Game can read the saved data
  const APIData = useRef({})

  return (
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> 
      <Router>
        <Switch>
          <Route exact path="/">
            <InputFormHandler APIData={APIData}/>
          </Route>
          <Route exact path="/game">
            <Game APIData={APIData}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
