import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import AboutUs from './components/about/AboutUs'
import Card from './components/services/Cards'
import ContactForm from './components/forms/ContactForm'
import Services from './components/packages/packageUI'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* <Landing />
        <AboutUs />
        <Card /> */}
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/about' component={AboutUs}></Route>
          <Route exact path='/packages' component={Services}></Route>
          <Route exact path='/contact' component={ContactForm}></Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
