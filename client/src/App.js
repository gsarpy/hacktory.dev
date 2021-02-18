import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Container }  from "reactstrap";

import Navigation     from "./layout/navigation";
import Home           from "./layout/views/home";
import Registration   from "./layout/views/registration";
import NewVideo       from "./layout/views/newVideo";
import VideoHome      from "./layout/views/videoHome";

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
            <Route path="/video/:id">
              <VideoHome />
            </Route>
            <Route path="/video/new">
              <NewVideo />
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
