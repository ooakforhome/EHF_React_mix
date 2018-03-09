import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogPage } from './components/parts/LogPage'



const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LogPage} />
      </Switch>
    </div>
  </Router>;

export default App;
