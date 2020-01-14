import React, { Component } from 'react'
import Carousel from '../carousel/Carousel'
import ContactForm from '../forms/ContactForm'
// import Footer from '../layout/Footer'

import Header from './Header'
// import Services from '../services/Services'
import PackageUI from '../packages/packageUI'

class Landing extends Component {
  render() {
    return (
      <div>
        <Header aoe='to Art Of Entertainment' can='Welcome' />
        <div className="container">

          <Carousel />
          <PackageUI />
          <ContactForm />
          {/* <Footer /> */}
        </div>
      </div>
    )
  }
}

export default Landing