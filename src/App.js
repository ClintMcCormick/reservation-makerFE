import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Nav/Navbar'
import HomePage from './components/Pages/HomePage'
import About from './components/Pages/About'
import Restaurants from './components/Pages/Restaurants'
import Reservation from './components/Pages/Reservation'
import Review from './components/Pages/Review'
import CancelReservation from './components/Pages/CancelReservation'
import SignUp_Login from './components/Pages/SignUp_Login'


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <body>
        <Navbar />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" component={About} />
        <Route path="/Restaurants" component={Restaurants} /> 
        <Route path="/Reservation" component={Reservation} /> 
        <Route path="/Review" component={Review} />
        <Route path="/CancelReservation" component={CancelReservation} /> 
        <Route path="/SignUp_Login" component={SignUp_Login} /> 
        </Switch>
    </body>
    </Router>
  );
}

export default App;
