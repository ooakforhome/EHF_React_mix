import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage'
import { SampleProducts } from './components/pages/SampleProductsPage/SampleProducts'
import { FurnitureForm } from './components/pages/FurnitureForm/Furniture'
import { ProductForm } from './components/pages/ProductForm/ProductForm'
import { Products } from './components/pages/ProductsPage/Products'
import { ProductDetail } from './components/pages/ProductDetail/ProductDetail'
import  Spd  from './components/pages/Spd/Spd'
import  SpdForm  from './components/pages/SpdForm/SpdForm'


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component = { HomePage } />
        <Route exact path="/spd" component = { Spd } />
        <Route exact path="/spdform" component = { SpdForm } />
        <Route exact path="/sample" component = { SampleProducts } />
        <Route exact path="/products" component = { Products } />
        <Route exact path="/productdetail/:id" component = { ProductDetail } />
        <Route exact path="/Furniture" component = { FurnitureForm } />
        <Route exact path="/addproduct" component = { ProductForm } />
      </Switch>
    </div>
  </Router>;

export default App;
