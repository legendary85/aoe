import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer ">
        <div className="container">
          <div className="social-media">

            <a href=""><i className="fab fa-facebook-square fa-2x"></i></a>
            <a href=""><i className="fab fa-instagram fa-2x"></i></a>
            <a href=""><i className="fab fa-twitter-square fa-2x"></i></a>
          </div>
          <p className="mt-2">Art of Entertainment &copy; 2020, All Rights Reserved</p>
        </div>
      </footer >
    )
  }
}
export default Footer