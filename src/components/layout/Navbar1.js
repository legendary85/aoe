import React, { Component } from 'react'
import logo from '../../img/showcase.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  state = {
    isOpen: false
  }


  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen

    })
  }

  closeNavBar = () => {
    this.setState({
      isOpen: false

    })
  }

  render() {
    return (

      <nav>
        <div className="logoBtn">
          <div className="logo">

            {/* <a href="#"><img src={logo} alt="" /></a> */}
            <Link href="/" onClick={this.closeNavBar}><img src={logo} alt="" /></Link>
          </div>

          <div id='navBarBtn' className="btn mr-3" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul id="navLinks" className={this.state.isOpen ? 'showNav' : 'undefined'}>
          {/* replace a tags with link */}
          {/* <li><a href="/">Home</a></li> */}
          <li><Link to="/" onClick={this.closeNavBar}>Home</Link></li>
          <li><Link to="/about" onClick={this.closeNavBar}>About</Link></li>
          <li><Link to="/services" onClick={this.closeNavBar}>Packages</Link></li>
          <li><Link to="" onClick={this.closeNavBar}>Mixes</Link></li>
          <li><Link to="" onClick={this.closeNavBar}>Contact Us</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar




