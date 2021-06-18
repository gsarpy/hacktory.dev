import React from "react";
import { Provider } from "react-redux";
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import store from './state/store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import emailValidation from './utilities/emailValidation';

// IMPORT COMPONENTS
import SideBarNav from './components/layout/SidebarNav';
import TopNav from './components/layout/TopNav';

// IMPORT VIEWS
import HomeLoggedOut from './components/views/Home/HomeLoggedOut';

const emailTest = emailValidation("gregsarpy@gmail.com");
console.log("EMAIL TEST", emailTest);

function App() {
  return (
    <Provider store={store}>
      <Container fluid={"true"} maxWidth={false} disableGutters={true}>
        <Router>
          <TopNav />
          <Switch>
            <Route path="/">
              <Grid container>
                <HomeLoggedOut />
              </Grid>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
