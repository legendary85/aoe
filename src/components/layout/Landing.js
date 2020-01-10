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
        <PackageUI />
        {/* <Services /> */}
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Landing