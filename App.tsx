import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "android/app/src/components/HomeComponent.jsx";
import Login from 'android/app/src/components/Login.jsx';

function App() {
  return (
  <React.Fragment>
 <Router>
 <Route exact path="android/app/src/components/" component={Login} />
 <Route path="android/app/src/components/" component={HomeComponent} />
</Router>
    <h1>HOOOOOOOOOOLAAAAAAA</h1>
   </React.Fragment>
  );
}
export default App;
