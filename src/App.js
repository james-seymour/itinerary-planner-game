import './App.css';
import { useRef, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import InputFormHandler from './components/input/InputFormHandler';
import Info from "./pages/Info";
import Car from "./components/game/Car"
import GameWrapper from './components/game/GameWrapper';


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
  const [attractionVisibility, setAttractionVisibility] = useState(false)
  const [flightsVisibility, setFlightsVisibility] = useState(false)
  const [hotelsVisibility, setHotelsVisibility] = useState(false)
  const [restaurantVisibility, setRestaurantVisibility] = useState(false)
  const [weatherVisibility, setWeatherVisibility] = useState(false)
  const [mapVisibility, setMapVisibility] = useState(false)

  const visibility = { 
    attractions: attractionVisibility, 
    flights: flightsVisibility,
    hotels: hotelsVisibility,
    restaurants: restaurantVisibility,
    weather: weatherVisibility,
    map: mapVisibility,  
  }

  const setVisibility = {
    attractions: setAttractionVisibility,
    flights: setFlightsVisibility,
    hotels: setHotelsVisibility,
    restaurants: setRestaurantVisibility,
    weather: setWeatherVisibility,
    map: setMapVisibility,
  }

  return (
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> 
      <Router>
        <Switch>
          <Route exact path="/">
            <InputFormHandler APIData={APIData}/>
          </Route>
          <Route exact path="/testing">
          </Route>
          <Route exact path="/game">
            <Info visibility={visibility} APIData={APIData}/>
            {/* setVibility gets passed in here for Game to update */}
            <GameWrapper setVisibility={setVisibility}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
//<Info visibility={visibility} APIData={APIData}/>