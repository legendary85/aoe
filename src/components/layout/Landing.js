import React, { Component } from 'react'
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

          <PackageUI />
          {/* <Services /> */}
          {/* <Footer /> */}
        </div>
      </div>
    )
  }
}

export default Landing