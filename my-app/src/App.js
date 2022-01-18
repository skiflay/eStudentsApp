import React from 'react';
import Home from '../src/Pages/Home'
import ProductList from '../src/Pages/ProductList'
import Product from '../src/Pages/Product'
import Cart from '../src/Pages/Cart'
import Register from '../src/Pages/Register'
import Login from '../src/Pages/Login'
import {useSelector} from 'react-redux'

import { BrowserRouter as Router,  Switch,  Route, Redirect } from "react-router-dom";


function App() {
  //const user = false;
  const user = useSelector((state)=> state.user.currentUser)
  console.log(user)
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <Home/>
        </Route>
        <Route  path="/products/:category">
          <ProductList/>
        </Route>
        <Route  path="/product/:id">
          <Product/>
        </Route>
        <Route  path="/cart">
          <Cart/>
        </Route>
        <Route  path="/login">  {user ? <Redirect to="/" /> : <Login/>}  </Route>
        <Route  path="/register"> {user ? <Redirect to="/" /> : <Register/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
