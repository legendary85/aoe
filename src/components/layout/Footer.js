import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div id='footer' className="navbar navbar-inverse navbar-fixed-bottom" role='navigation'>
        <div className="container">
          <div className="navbar-text">

            <div className="social-media">

              <a href=""><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href=""><i className="fab fa-instagram fa-2x"></i></a>
              <a href=""><i className="fab fa-twitter-square fa-2x"></i></a>
            </div>
            <p id='copyright' className="mt-2">Art of Entertainment &copy; 2020, All Rights Reserved</p>
          </div>
        </div>
      </div>


    )
  }
}
export default Footer

