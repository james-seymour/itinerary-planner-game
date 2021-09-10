import './App.css';
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
  return (
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> 
      <Router>
        <Switch>
          <Route exact path="/">
            <InputFormHandler />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
