import React from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import AboutUs from './components/about/AboutUs'
import Card from './components/services/Cards'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Card />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
