import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { ThemeProvider, Container } from '@material-ui/core';
import theme from './components/styles/theme.js';

// Import Layout
import Nav from './components/layout/nav';

//Import Views
import Home       from './components/views/home'; 
import Register   from './components/views/register'; 

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Container> 
            <Switch>
              <Route path='/about'>
                <h1>About</h1>
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/login'>
                <h1>Login</h1>
              </Route>
              <Route path='/course/:id'>
                <h1>Course</h1>
              </Route>
              <Route path='/user/:username'>
                <h1>User</h1>
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
