import React, { Component } from 'react'
import logo from '../../img/showcase.png'

class Header extends Component {
  render(props) {

    const { can, aoe } = this.props;
    return (
      // <header>

      // </header>

      <section className='main'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <img src={logo} className='showcase' alt="" />
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>{can}</h1>
              <h2>{aoe}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vitae similique? Beatae reprehenderit numquam totam exercitationem, eos odio voluptatum recusandae nisi sed! Optio dicta reiciendis tempore id iure omnis fugiat!</p>
              <a href="" className="btn">Read More</a>
            </div>
          </div>
        </div> */}
      </section>
    )
  }
}

export default Header