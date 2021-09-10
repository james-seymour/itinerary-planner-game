import './App.css';
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';


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
    fontSize
  }
})

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
