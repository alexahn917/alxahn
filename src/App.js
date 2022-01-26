import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import './App.css';

import MainPageContainer from './pages/MainPageContainer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#749afd',
      main: '#365fb5',
      dark: '#1a5284',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF8A80',
      main: '#E53935',
      dark: '#B71C1C',
      contrastText: '#FFEBEE',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Dosis', 'Quicksand', 'sans-serif'],
    fontSize: '14',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500'
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MainPageContainer/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
