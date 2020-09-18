import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Navbar from './components/Nav/Navbar'
import HomePageGrid from './components/Grids/HomePageGrid'


function App() {
  return (
    <body>
        <Navbar />
        <HomePageGrid />
    </body>
  );
}

export default App;
