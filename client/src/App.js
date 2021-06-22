import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './state/store';

// IMPORT COMPONENTS
import TopNav from './components/layout/TopNav';

// IMPORT VIEWS
import HomeLoggedOut from './components/views/Home/HomeLoggedOut';

function App() {
  return (
    <Provider store={store}>
      <Container fluid="true" maxWidth={false} disableGutters>
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
