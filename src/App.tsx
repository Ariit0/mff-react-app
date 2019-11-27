import React, { Component } from 'react';
import { Drawer, Button, createMuiTheme } from "@material-ui/core";
import Base from './views/Base';
import { ThemeProvider } from '@material-ui/styles';

interface AppProps { }

interface AppState { }

const theme = createMuiTheme();

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Base />
      </ThemeProvider>
    );
  }
}

export default App;
