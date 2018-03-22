import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogPage } from './components/parts/LogPage'
import { Products } from './components/pages/ProductsPage/Products'
import { FurnitureForm } from './components/pages/FurnitureForm/Furniture'
import { AddPetPage } from './components/pages/AddPetForm/AddPetPage'
import { ProductForm } from './components/pages/ProductForm/ProductForm'

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { LogPage } />
        <Route exact path="/products" component = { Products } />
        <Route exact path="/pet" component = { AddPetPage } />
        <Route exact path="/Furniture" component = { FurnitureForm } />
        <Route exact path="/addproduct" component = { ProductForm } />
      </Switch>
    </div>
  </Router>;

export default App;
