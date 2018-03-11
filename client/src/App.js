import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogPage } from './components/parts/LogPage'
import { Products } from './components/pages/Products/Products'


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { LogPage } />
        <Route exact path="/product" component = { Products } />
      </Switch>
    </div>
  </Router>;

export default App;
