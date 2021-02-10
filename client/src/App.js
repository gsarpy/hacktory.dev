import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container } from "reactstrap"

import Navigation from "./layout/navigation"
import Home from "./layout/views/home"
import Registration from "./layout/views/registration"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container fluid>
          <Switch>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
