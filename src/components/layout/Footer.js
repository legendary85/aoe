import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div id='footer' className="navbar navbar-inverse navbar-fixed-bottom" role='navigation'>
        <div className="container">
          <div className="navbar-text pull-left">

            <div className="social-media">

              <a href=""><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href=""><i className="fab fa-instagram fa-2x"></i></a>
              <a href=""><i className="fab fa-twitter-square fa-2x"></i></a>
            </div>
            <p className="mt-2">Art of Entertainment &copy; 2020, All Rights Reserved</p>
          </div>
          <p>THIS IS A FOOTER</p>
        </div>
      </div>


    )
  }
}
export default Footer

