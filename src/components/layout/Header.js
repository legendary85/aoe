import React, { Component } from 'react'
import logo from '../../img/showcase.png'

class Header extends Component {
  render(props) {

    const { can, aoe } = this.props;
    return (
      <section className='main'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            {/* <img src={logo} className='showcase' alt="" /> */}
          </div>
          {/* <h2>{can}</h2>
          <h3>{aoe}</h3> */}
        </div>
      </section>
    )
  }
}

export default Header