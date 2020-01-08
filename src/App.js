import React from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import AboutUs from './components/about/AboutUs'
import Services from './components/services/Services'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
