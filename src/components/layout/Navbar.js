import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">Art of Entertainment</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">About</a>
            <a class="nav-item nav-link" href="#">Packages</a>
            <a class="nav-item nav-link" href="#">Contact</a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Media</a>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navbar