import React, { Component } from 'react'
import logo from '../../img/showcase.png'

class Header extends Component {
  render(props) {

    const { can, aoe } = this.props;
    return (
      <header>
        <img src={logo} className='showcase' alt="" />
        {/* <div className="welcome"> */}
        {/* <img src={imgOfChoice} alt=""/> */}
        {/* <h1>{can} </h1>
          <h2>{aoe}</h2>
        </div> */}
      </header>
    )
  }
}

export default Header