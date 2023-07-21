import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "/components/HomeComponent.jsx";
import Login from '/components/Login.jsx';

function App() {
  return (
 <Router>
 <Route exact path="components/" component={Login} />
 <Route path="components/" component={HomeComponent} />
</Router>
  );
}

export default App;
